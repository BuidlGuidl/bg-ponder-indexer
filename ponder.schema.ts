import { createSchema } from "@ponder/core";

// Keeping the schema simple for now. We could have relationships as:
// - new Cohort table with Cohort info (name, balance, totalWithdrawn, url, etc)
// - new Builder table with Builder info (ens, etc)
// - many-to-many relationship between Cohort and Builder (as CohortBuilder)
export default createSchema((p) => ({
  CohortBuilder: p.createTable({
    id: p.string(),
    amount: p.float(),
    cohortContractAddress: p.bytes(),
    timestamp: p.bigint(),
    ens: p.string().optional(),
  }),
  CohortWithdrawal: p.createTable({
    id: p.string(),
    builder: p.bytes(),
    amount: p.float(),
    cohortContractAddress: p.bytes(),
    reason: p.string(),
    timestamp: p.bigint(),
  }),
}));
