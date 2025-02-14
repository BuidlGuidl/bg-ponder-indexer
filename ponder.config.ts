import { createConfig } from "ponder";
import { http } from "viem";

import { CohortContractAbi } from "./abis/CohortContractAbi";

type cohortType = {
  name: string,
  chainId: number,
  address: `0x${string}`,
  url?: string,
};

export const cohorts: cohortType[] = [
  {
    name: '0xAfro',
    address: '0x3DDb71FB2b6Fb530615FC1dEb9461d6489EDA1ff',
    chainId: 10,
  },
  {
    name: 'Autonomous worlds (Jessy)',
    address: '0xcb59f4bab420abdb3c6ae0997cc9ac7526d5e163',
    chainId: 1,
    url: 'https://autoworld-streams.buidlguidl.com/',
  },
  {
    name: 'Batches',
    address: '0x5C2584671d4a43C67B92D8a053B16546A1162B3b',
    chainId: 1,
    url: 'https://batches.buidlguidl.com/',
  },
  {
    name: 'Balancer Cohort Stream',
    address: '0xf32409271be1bb02f15922a6ea38be79e664a247',
    chainId: 1,
    url: 'https://balancer.buidlguidl.com/',
  },
  {
    name: 'BG Media',
    address: '0xa6efa453c25658f725590a5821cf408818f25fef',
    chainId: 1,
    url: 'https://media.buidlguidl.com/',
  },
  {
    name: 'BG Outreach',
    address: '0xe54f8b7fddf75257c7f248a197553ac467296053',
    chainId: 1,
    url: 'https://outreach.buidlguidl.com/',
  },
  {
    name: 'ENS Cohort Stream',
    address: '0x2634af3e799d3e17c6cf30bcf1275a7e3808f0df',
    chainId: 1,
    url: 'https://ens.buidlguidl.com/',
  },
  {
    name: 'Infrastructure (Jessy)',
    address: '0x502730421b796baeeb9d907d88685234ddb44750',
    chainId: 1,
  },
  {
    name: 'Jessy\'s Hacker House',
    address: '0x2be18e07c7be0a2cc408c9e02c90203b2052d7de',
    chainId: 1,
  },
  {
    name: 'LaunchPod',
    address: '0x751e87af85b97054b30aD822291696482625e947',
    chainId: 10,
    url: 'https://launchpod.buidlguidl.com/',
  },
  {
    name: 'Mercs',
    address: '0x1c873c172662c3774d089ab967911bc32c04bb08',
    chainId: 1,
    url: 'https://mercs.buidlguidl.com/',
  },
  {
    name: 'NiftyInk',
    address: '0x882d6ab20ce8af9cb32e6ee3dc85f090427bcd1a',
    chainId: 1,
    url: 'https://niftyink.buidlguidl.com/',
  },
  {
    name: 'Nodes',
    address: '0x4B195Bb4DD0A8fd739433c6854cA15DeCbBA52E8',
    chainId: 1,
    url: 'https://nodes.buidlguidl.com/',
  },
  {
    name: 'Not Just Notfellows',
    address: '0xacc9cc4983d57cea0748b8cd1adb87ada5b1a67c',
    chainId: 1,
  },
  {
    name: 'Owners',
    address: '0xd0ace9462d957485904b3437d4818ee2f9f2efed',
    chainId: 1,
    url: 'https://owners.buidlguidl.com/',
  },
  {
    name: 'Play full',
    address: '0x3E920e4a1C26a9c6488c3E5c7CB1e91a179927F5',
    chainId: 10,
    url: 'https://play-full.buidlguidl.com/',
  },
  {
    name: 'Sanctum Cohort Stream',
    address: '0xa90f607224a0236b08ae02178ab57aef712f86d3',
    chainId: 1,
  },
  {
    name: 'Sand Garden',
    address: '0x964d0C9a421953F95dAF3A5c5406093a3014A5D8',
    chainId: 10,
    url: 'https://sandgarden.buidlguidl.com/',
  },
  {
    name: 'Security & optimizooors (Jessy)',
    address: '0xaf18f0f1f096fac34e816c7409348d313ef7c84f',
    chainId: 1,
  },
  {
    name: 'Ship Yard',
    address: '0x55Cb9CB337CDb0A41cAc89Ffac4627744b50B566',
    chainId: 10,
    url: 'https://shipyard.buidlguidl.com/',
  },
  {
    name: 'Workshops',
    address: '0x825078aB3d66b91B66D4b907a4742019Ca4Fdf30',
    chainId: 1,
    url: 'https://workshops.buidlguidl.com/',
  },
  {
    name: 'ZK & cryptography (Jessy)',
    address: '0xfe2d6743d7180e07be769bf59d3c0f560b199434',
    chainId: 1,
  },
];

const mainnetCohorts = cohorts.filter(cohort => cohort.chainId === 1).map(cohort => cohort.address);
const optimismCohorts = cohorts.filter(cohort => cohort.chainId === 10).map(cohort => cohort.address);

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_MAINNET),
      pollingInterval: 12_000,
    },
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_OPTIMISM),
      pollingInterval: 2_000,
    },
  },
  contracts: {
    CohortContract: {
      abi: CohortContractAbi,
      network: {
        mainnet: {
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
  blocks: {
    CohortContractsBalanceUpdate: {
      network: {
        mainnet: {
          // 2024-02-14 block, we don't need to index before that because the cohort balance is updated on withdrawal too
          startBlock: 21846294,
          interval: 60 / 12, // Every hour
        },
        optimism: {
          // 2024-02-14 block, we don't need to index before that because the cohort balance is updated on withdrawal too
          startBlock: 131978309,
          interval: 60 / 2, // Every hour
        },
      },
    },
  },
});
