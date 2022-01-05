require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/YXTKMgI3QHIM7IT-PwKpf1FhyiJWXsP8',
      accounts: ['ac65561db915ce5bc712a948029c0c1feb5588a46f0649290864296c0ae2080c'],
    },
  },
};
