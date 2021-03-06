/* eslint-disable import/prefer-default-export */

export const network = {
  1: {
    default: true, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    contract: '',
    rpc: 'https://mainnet.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  2: {
    name: 'Morden Test Network',
    contract: '',
  },
  3: {
    name: 'Ropsten Test Network',
    // contract: '0xddb903baf5fffab0223423acb51faf3d287e4e3e',
    contract: '0x227d54dde571751dc95387832e4e43e640440116',
    rpc: 'https://ropsten.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  4: {
    name: 'Rinkeby Test Network',
    contract: '',
    rpc: 'https://rinkeby.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  42: {
    name: 'Kovan Test Network',
    contract: '',
    rpc: 'https://kovan.infura.io/lTETGFVyQX99UKQ98BN4',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

export const i18n = [
  {
    langDisplay: '中文',
    locale: 'zh',
    aliases: ['zh', 'zh-cn', 'zh-hk', 'zh-sg', 'zh-tw'],
  },
  {
    langDisplay: 'English',
    locale: 'en',
    aliases: ['en', 'en-us', 'en-au', 'en-bz', 'en-ca', 'en-ie', 'en-jm', 'en-nz', 'en-ph', 'en-za', 'en-tt', 'en-gb', 'en-zw'],
  },
  {
    langDisplay: '日本語',
    locale: 'jp',
    aliases: ['jp'],
  },
];
