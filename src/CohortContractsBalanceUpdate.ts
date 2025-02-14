import { ponder } from "ponder:registry";
import { cohortInformation } from "ponder:schema";
import { cohorts } from "../ponder.config";

ponder.on("CohortContractsBalanceUpdate:block", async ({ event: _event, context }) => {
  const filteredCohorts = cohorts.filter((cohort) => cohort.chainId === context.network.chainId);

  for (let i = 0; i < filteredCohorts.length; i++) {
    const address = (filteredCohorts[i]?.address as string).toLowerCase() as `0x${string}`;
    const balance = await context.client.getBalance({ address });

    const cohort = await context.db.find(cohortInformation, { address: address });

    if (cohort && cohort.balance !== balance) {
      await context.db
        .update(cohortInformation, { address: address })
        .set({
          balance,
        });
    }
  }
});
