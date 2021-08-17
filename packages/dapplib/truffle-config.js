require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea nasty flee spot warrior ridge remember smile hover area success soup'; 
let testAccounts = [
"0xe7c8bc3bdde0db7d2112ace4688fcab77f2088352986f521f994dc969418a956",
"0xe11cd589068b0378cf6a247c2700129e17f251068ddcdcad279d50e5878f45a6",
"0xa11c64e23f7bafcdb80304189e25ac664d13f6b101df1a26321ebeb2c663717f",
"0xfec77e4dde295e753abbb46f27e7a443d982cb08e850ec622a46d9ba01cf7d70",
"0xf8d2dbbb72db282f1b9e3dc69e154683c16aa53dc16b42ad947638c7c51c2d5d",
"0xd445ff5fa38ddbcf68d4ff5ad14ef3fa9070824f38bdf7faf7969833c8a737f5",
"0x9ba95494538d86823ad189e5df0f4a58c845ced92596710b7ac8f4dc82e4ad74",
"0x159e02ed4a495a3a97c0113a22bfc58fc15fafd9f6e58fb365b2883d05edb699",
"0x49f253d23629b74237142c86ff51bdf8cd1e4f2246448b9d34bad6adfbe5e58e",
"0x92e245f588f996f0e81e11ea692220ff57a1692e299836909a522f403531d6d3"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


