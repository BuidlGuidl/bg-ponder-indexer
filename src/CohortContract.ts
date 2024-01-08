import { ponder } from "@/generated";
import { formatEther } from "viem";

ponder.on("CohortContract:AddBuilder", async ({ event, context }) => {
  const { db } = context;

  await db.CohortBuilder.upsert({
    // Builders can be in multiple cohorts, so we need to use a composite key.
    id: `${event.args.to}-${event.log.address}`,
    create: {
      amount: parseFloat(formatEther(event.args.amount)),
      cohortContractAddress: event.log.address,
      timestamp: event.block.timestamp,
      // ToDo. ens (context.client is a viem client, but doesn't expose getENSName)
    },
    update: {
      amount: parseFloat(formatEther(event.args.amount)),
      timestamp: event.block.timestamp,
    },
  });
});

ponder.on("CohortContract:UpdateBuilder", async ({ event, context }) => {
  const { db } = context;

  // We could delete the builder if the amount is 0, but we'll keep it for now.
  await db.CohortBuilder.update({
    id: `${event.args.to}-${event.log.address}`,
    data: {
      amount: parseFloat(formatEther(event.args.amount)),
    },
  });
});

ponder.on("CohortContract:Withdraw", async ({ event, context }) => {
  const { db } = context;

  await db.CohortWithdrawal.create({
    id: `${event.args.to}-${event.log.address}-${event.block.number}`,
    data: {
      builder: event.args.to,
      amount: parseFloat(formatEther(event.args.amount)),
      cohortContractAddress: event.log.address,
      reason: event.args.reason,
      timestamp: event.block.timestamp,
    }
  });
});
