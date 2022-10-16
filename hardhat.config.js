require('dotenv').config()
require('hardhat-deploy')
require('@nomiclabs/hardhat-ethers')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.15',
  defaultNetwork: 'lotus-local-net',
  networks: {
    'lotus-local-net': {
      url: 'http://localhost:1234/rpc/v0',
      httpHeaders: {
        'Content-Type': 'application/json',
      },
      // since it's difficult to estimate the gas before f4 address is launched, it's safer to manually set
      // a large gasLimit. This should be addressed in the following releases.
      gas: 1000000000,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },
  },
}
