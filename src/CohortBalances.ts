import { ponder } from "ponder:registry";
import { cohortInformation } from "ponder:schema";
import ponderConfig from "../ponder.config";

Object.entries(ponderConfig.accounts).forEach(([address, _account]) => {
  ponder.on(`${address}:transfer:to`, async ({ event, context }) => {
    const balance = await context.client.getBalance({ address: event.transfer.to });

    await context.db
      .insert(cohortInformation)
      .values({
        address: event.transfer.to,
        balance,
      })
      .onConflictDoUpdate(() => ({
        balance,
      }));
  });
});
