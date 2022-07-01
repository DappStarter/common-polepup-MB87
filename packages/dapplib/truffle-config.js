require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue return sad million idea process army gesture'; 
let testAccounts = [
"0x171665dd7df581c3881961182ade94e597cd5dd4bf1c64bef0e94bf54aa4ff09",
"0x28795d17ce22b6bf04075cf41aee281bc0e5d48f761202b04591a6bbf6d7c194",
"0x9661287441d4a434242b9fe1ccb136a07d59ab9e0af8c049161ece1faf79664b",
"0xceea82f85dca1600f7bc1f15fc09450375e0132366ce7b7686cf7a8b4ac087fe",
"0xa1ee883e65599985a0fb75aadc612a7b68f08c38d91dc6b18895dce3e654d957",
"0x2677dc531ad45ad5803429ae3f6fc1f6b7886ae7cd171c87a84595846fec3075",
"0x9a43dbb53cf1ce6a1b75e33e5ff34f0cef2c04207bbb1e28569c98b2b037f3f5",
"0x80df519f1a68b6d7a58fa6de3e59b1b654e79917f5963b63bad15a1cb7ac76a2",
"0x173a9fc0c631f2029a13f6095ce75458507ea8b66b2d361307f6abeb21b8460f",
"0xb57a6267b45cb33eb48faef12eb95fa888264ca86aac7411ce329541573ef4df"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


