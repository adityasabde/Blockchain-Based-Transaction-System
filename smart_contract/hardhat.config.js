// https://eth-goerli.g.alchemy.com/v2/sStAq7w5VySi8VunQmd0C8umD5bxYl7B

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
 
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli :{
      url: 'https://eth-goerli.g.alchemy.com/v2/sStAq7w5VySi8VunQmd0C8umD5bxYl7B',
      accounts : [ '0x36533e023B9AC726cEb986422278BEdd6E87460f' ]
    },
  },
}