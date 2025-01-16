import { ponder } from "ponder:registry";
import { formatEther } from "viem";
import { cohortBuilder, cohortWithdrawal } from "ponder:schema";

ponder.on("CohortContract:AddBuilder", async ({ event, context }) => {
  await context.db
    .insert(cohortBuilder)
    .values({
      id: `${event.args.to}-${event.log.address}`,
      amount: parseFloat(formatEther(event.args.amount)),
      cohortContractAddress: event.log.address,
      timestamp: event.block.timestamp,
      // TODO: Add ENS lookup: ChainDoesNotSupportContract: Chain "mainnet" does not support contract "ensUniversalResolver".
      //  The contract "ensUniversalResolver" was not deployed until block 19258213 (current block 16992408)
      // ens: enstName,
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
  await context.db.insert(cohortWithdrawal).values({
    id: event.log.id,
    builder: event.args.to,
    amount: parseFloat(formatEther(event.args.amount)),
    cohortContractAddress: event.log.address,
    reason: event.args.reason,
    timestamp: event.block.timestamp,
  });
});
