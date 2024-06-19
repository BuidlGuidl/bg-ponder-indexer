import { createConfig } from "@ponder/core";
import { http } from "viem";

import { CohortContractAbi } from "./abis/CohortContractAbi";

const mainnetCohorts = [
  // Main Hacker House (Jessy's)
  "0x2Be18e07C7be0a2CC408C9E02C90203B2052D7DE",
  // Infrastructure (Jessy's)
  "0x502730421b796baeeB9D907d88685234dDb44750",
  // Security & Optimizooors (Jessy's)
  "0xaF18f0f1F096FaC34E816C7409348D313ef7c84F",
  // Autonomous Worlds (Jessy's)
  "0xcb59f4bab420abdb3c6ae0997cc9ac7526d5e163",
  // ZK & Cryptography (Jessy's)
  "0xfe2d6743d7180e07be769bF59D3c0f560B199434",
  // Sanctum Cohort Stream
  "0xA90F607224A0236B08Ae02178AB57aef712f86D3",
  // BG Outreach
  "0xE54F8B7FDdf75257c7F248a197553Ac467296053",
  // ENS Cohort Stream
  "0x2634aF3E799D3E17C6cf30bCF1275A7e3808F0df",
  // Balancer Cohort Stream
  "0xF32409271BE1Bb02F15922A6EA38BE79E664a247",
  // Not Just Notfellows
  "0xaCc9Cc4983D57cea0748B8CD1Adb87Ada5b1a67c",
  // Media
  "0xa6EfA453c25658F725590A5821Cf408818f25FEf",
] as `0x${string}`[];

const optimismCohorts = [
  // Sand Garden (old)
  "0x2eA63c9C9C114ae85b1027697A906420a23e8572",
  // Sand Garden (new)
  "0x964d0C9a421953F95dAF3A5c5406093a3014A5D8",
  // LaunchPod
  "0x751e87af85b97054b30aD822291696482625e947",
  // 0xAfro
  "0x3DDb71FB2b6Fb530615FC1dEb9461d6489EDA1ff",
  // Play full
  "0x3E920e4a1C26a9c6488c3E5c7CB1e91a179927F5",
  // Mercs
  "0x8d84f7E545F69746e4A1CAD0F7ac9A83CCDF2C65",
  // Ship Yard
  "0x55Cb9CB337CDb0A41cAc89Ffac4627744b50B566",
] as `0x${string}`[];

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_MAINNET),
      pollingInterval: 15_000,
    },
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_OPTIMISM),
      pollingInterval: 15_000,
    },
  },
  contracts: {
    CohortContract: {
      abi: CohortContractAbi,
      network: {
        mainnet: {
          // This can be multiple addresses []
          address: mainnetCohorts,
          startBlock: 16992407,
        },
        optimism: {
          address: optimismCohorts,
          startBlock: 101114639,
        },
      },
    },
  },
});
