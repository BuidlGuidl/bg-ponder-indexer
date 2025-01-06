import { onchainTable, index } from "ponder";

export const cohortBuilder = onchainTable(
  "cohort_builder",
  (t) => ({
    id: t.text().primaryKey(),
    amount: t.real().notNull(),
    cohortContractAddress: t.hex().notNull(),
    timestamp: t.bigint().notNull(),
    ens: t.text(),
  }),
  (table) => ({
    cohortAddressIdx: index().on(table.cohortContractAddress),
  }),
);

export const cohortWithdrawal = onchainTable(
  "cohort_withdrawal",
  (t) => ({
    id: t.text().primaryKey(),
    builder: t.hex().notNull(),
    amount: t.real().notNull(),
    cohortContractAddress: t.hex().notNull(),
    reason: t.text().notNull(),
    timestamp: t.bigint().notNull(),
  }),
  (table) => ({
    cohortAddressIdx: index().on(table.cohortContractAddress),
  }),
);
