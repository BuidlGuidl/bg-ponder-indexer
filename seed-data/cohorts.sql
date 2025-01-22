INSERT INTO cohort_indexer.cohort_information (address, network, name, balance)
VALUES (
    '0x2be18e07c7be0a2cc408c9e02c90203b2052d7de',
    'mainnet',
    'Jessy''s Hacker House',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Jessy''s Hacker House';

INSERT INTO cohort_indexer.cohort_information (address, network, name, balance)
VALUES (
    '0x502730421b796baeeb9d907d88685234ddb44750',
    'mainnet',
    'Infrastructure (Jessy)',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Infrastructure (Jessy)';

INSERT INTO cohort_indexer.cohort_information (address, network, name, balance)
VALUES (
    '0xaf18f0f1f096fac34e816c7409348d313ef7c84f',
    'mainnet',
    'Security & optimizooors (Jessy)',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Security & optimizooors (Jessy)';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0xcb59f4bab420abdb3c6ae0997cc9ac7526d5e163',
    'mainnet',
    'Autonomous worlds (Jessy)',
    'https://autoworld-streams.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Autonomous worlds (Jessy)',
    url = 'https://autoworld-streams.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, balance)
VALUES (
    '0xfe2d6743d7180e07be769bf59d3c0f560b199434',
    'mainnet',
    'ZK & cryptography (Jessy)',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'ZK & cryptography (Jessy)';

INSERT INTO cohort_indexer.cohort_information (address, network, name, balance)
VALUES (
    '0xa90f607224a0236b08ae02178ab57aef712f86d3',
    'mainnet',
    'Sanctum cohort stream',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Sanctum cohort stream';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0xe54f8b7fddf75257c7f248a197553ac467296053',
    'mainnet',
    'BG Outreach',
    'https://outreach.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'BG Outreach',
    url = 'https://outreach.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x2634af3e799d3e17c6cf30bcf1275a7e3808f0df',
    'mainnet',
    'ENS Cohort Stream',
    'https://ens.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'ENS Cohort Stream',
    url = 'https://ens.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0xf32409271be1bb02f15922a6ea38be79e664a247',
    'mainnet',
    'Balancer Cohort Stream',
    'https://balancer.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Balancer Cohort Stream',
    url = 'https://balancer.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, balance)
VALUES (
    '0xacc9cc4983d57cea0748b8cd1adb87ada5b1a67c',
    'mainnet',
    'Not just notfellows',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Not just notfellows';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0xa6efa453c25658f725590a5821cf408818f25fef',
    'mainnet',
    'BG Media',
    'https://media.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'BG Media',
    url = 'https://media.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0xd0ace9462d957485904b3437d4818ee2f9f2efed',
    'mainnet',
    'Owners',
    'https://owners.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Owners',
    url = 'https://owners.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x882d6ab20ce8af9cb32e6ee3dc85f090427bcd1a',
    'mainnet',
    'Nifty Ink',
    'https://niftyink.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Nifty Ink',
    url = 'https://niftyink.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x24f0aec2e06c25c60f54e37870ca555b2d9ba609',
    'mainnet',
    'Nodes',
    'https://nodes.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Nodes',
    url = 'https://nodes.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0xe98994c7e30a7f0a108ff3bf20773cd521494a5a',
    'mainnet',
    'Batches',
    'https://batches.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Batches',
    url = 'https://batches.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x1497f3831918e5220573ca6cdee15f16b2dbb063',
    'mainnet',
    'Workshops',
    'https://workshops.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Workshops',
    url = 'https://workshops.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x1c873c172662c3774d089ab967911bc32c04bb08',
    'mainnet',
    'Mercs',
    'https://mercs.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'mainnet',
    name = 'Mercs',
    url = 'https://mercs.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x2ea63c9c9c114ae85b1027697a906420a23e8572',
    'optimism',
    'BG Sand Garden (old)',
    'https://sandgarden.buidlguidl.com',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'optimism',
    name = 'BG Sand Garden (old)',
    url = 'https://sandgarden.buidlguidl.com';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x964d0c9a421953f95daf3a5c5406093a3014a5d8',
    'optimism',
    'BG Sand Garden (new)',
    'https://sandgarden.buidlguidl.com',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'optimism',
    name = 'BG Sand Garden (new)',
    url = 'https://sandgarden.buidlguidl.com';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x751e87af85b97054b30ad822291696482625e947',
    'optimism',
    'LaunchPod',
    'https://launchpod.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'optimism',
    name = 'LaunchPod',
    url = 'https://launchpod.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, balance)
VALUES (
    '0x3ddb71fb2b6fb530615fc1deb9461d6489eda1ff',
    'optimism',
    '0xafro',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'optimism',
    name = '0xafro';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x3e920e4a1c26a9c6488c3e5c7cb1e91a179927f5',
    'optimism',
    'Play Full',
    'https://play-full.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'optimism',
    name = 'Play Full',
    url = 'https://play-full.buidlguidl.com/';

INSERT INTO cohort_indexer.cohort_information (address, network, name, url, balance)
VALUES (
    '0x55cb9cb337cdb0a41cac89ffac4627744b50b566',
    'optimism',
    'Ship Yard',
    'https://shipyard.buidlguidl.com/',
    0
) ON CONFLICT(address) DO UPDATE SET
    network = 'optimism',
    name = 'Ship Yard',
    url = 'https://shipyard.buidlguidl.com/';
