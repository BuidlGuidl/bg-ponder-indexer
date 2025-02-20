import { ponder } from "ponder:registry";
import { formatEther, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";
import { cohortBuilder, cohortWithdrawal, cohortInformation } from "ponder:schema";
import { cohorts } from "../ponder.config";

// Create a viem client for the mainnet
const clientMainnet = createPublicClient({
  chain: mainnet,
  transport: http(process.env.PONDER_RPC_MAINNET),
});

ponder.on("CohortContract:setup", async ({ context }) => {
  const chainId = context.network.chainId;
  const filteredCohorts = cohorts.filter((cohort) => cohort.chainId === chainId);

  for (let i = 0; i < filteredCohorts.length; i++) {
    const cohortData = filteredCohorts[i];

    if (cohortData === undefined) {
      return;
    }

    await context.db
      .insert(cohortInformation)
      .values({
        address: cohortData.address.toLowerCase() as `0x{string}`,
        chainId: cohortData.chainId,
        name: cohortData.name,
        url: cohortData.url,
        balance: 0n,
      });
  }
});

ponder.on("CohortContract:AddBuilder", async ({ event, context }) => {
  let ensName = null;

  try {
    ensName = await clientMainnet.getEnsName({
      address: event.args.to,
    });
  } catch (e) {
    console.error("Error resolving ENS name: ", e);
  }

  await context.db
    .insert(cohortBuilder)
    .values({
      id: `${event.args.to}-${event.log.address}`,
      address: event.args.to,
      amount: parseFloat(formatEther(event.args.amount)),
      cohortContractAddress: event.log.address,
      timestamp: event.block.timestamp,
      ens: ensName,
    })
    .onConflictDoUpdate(() => ({
      amount: parseFloat(formatEther(event.args.amount)),
      timestamp: event.block.timestamp,
    }));
});

ponder.on("CohortContract:UpdateBuilder", async ({ event, context }) => {
  await context.db
    .update(cohortBuilder, { id: `${event.args.to}-${event.log.address}` })
    .set({
      amount: parseFloat(formatEther(event.args.amount)),
    });
});

ponder.on("CohortContract:Withdraw", async ({ event, context }) => {
  const cohortContractAddress = event.log.address;

  await context.db.insert(cohortWithdrawal).values({
    id: event.log.id,
    builder: event.args.to,
    cohortBuilder: `${event.args.to}-${cohortContractAddress}`,
    amount: parseFloat(formatEther(event.args.amount)),
    cohortContractAddress,
    reason: event.args.reason,
    timestamp: event.block.timestamp,
  });

  const balance = await context.client.getBalance({ address: cohortContractAddress });

  await context.db
    .update(cohortInformation, { address: cohortContractAddress })
    .set({ balance });
});
