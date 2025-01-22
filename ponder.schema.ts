import { onchainTable, index, relations } from "ponder";

export const cohortInformation = onchainTable(
  "cohort_information",
  (t) => ({
    address: t.hex().primaryKey(),
    network: t.text(),
    name: t.text(),
    url: t.text(),
    balance: t.bigint().notNull(),
  }),
);

export const cohortRelations = relations(cohortInformation, ({ many }) => ({
  builders: many(cohortBuilder),
  withdrawals: many(cohortWithdrawal),
}));

export const cohortBuilder = onchainTable(
  "cohort_builder",
  (t) => ({
    id: t.text().primaryKey(),
    address: t.hex().notNull(),
    amount: t.real().notNull(),
    cohortContractAddress: t.hex().notNull(),
    timestamp: t.bigint().notNull(),
    ens: t.text(),
  }),
  (table) => ({
    cohortAddressIdx: index().on(table.cohortContractAddress),
  }),
);

export const buildersRelations = relations(cohortBuilder, ({ one }) => ({
  cohort: one(cohortInformation, { fields: [cohortBuilder.cohortContractAddress], references: [cohortInformation.address] }),
}));

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

export const withdrawalsRelations = relations(cohortWithdrawal, ({ one }) => ({
  cohort: one(cohortInformation, { fields: [cohortWithdrawal.cohortContractAddress], references: [cohortInformation.address] }),
}));
