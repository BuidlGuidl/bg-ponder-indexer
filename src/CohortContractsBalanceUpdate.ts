import { ponder } from "ponder:registry";
import { cohortInformation } from "ponder:schema";
import { mainnetCohorts, optimismCohorts } from "../ponder.config";

ponder.on("CohortContractsBalanceUpdate:block", async ({ event, context }) => {
  let cohorts;

  if (context.network.name === "optimism") {
    cohorts = optimismCohorts;
  } else {
    cohorts = mainnetCohorts;
  }

  for (let i = 0; i < cohorts.length; i++) {
    const address = (cohorts[i] as string).toLowerCase() as `0x${string}`;
    const balance = await context.client.getBalance({ address });

    const cohort = await context.db.find(cohortInformation, { address: address });

    if (!cohort) {
      await context.db
        .insert(cohortInformation)
        .values({
          address,
          balance,
        });
    } else {
      if (cohort.balance !== balance) {
        await context.db
          .update(cohortInformation, { address: address })
          .set({
            balance,
          });
      }
    }
  }
});
