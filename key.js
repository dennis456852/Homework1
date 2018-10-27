// npm-library
const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;

// keypair
const wallet = Wallet.generate();

console.log('part a\n')

// privKey
const privKey = wallet.getPrivateKey();
console.log("privKey:", privKey.toString('hex'));
 
// pubKey
const pubKey = wallet.getPublicKey();
console.log("pubKey:", pubKey.toString('hex'));

// account
let account = wallet.getAddressString();
console.log("account:", account);

/***** address *****/
console.log('\npart b\n')

// step 2:  public_key_hash = Keccak-256(public_key)
const public_key_hash = keccak256(pubKey)

// step 3:  address = ‘0x’ + last 20 bytes of public_key_hash
const address = '0x' + public_key_hash.slice(public_key_hash.length - 40, public_key_hash.length)

console.log("address:", address);

console.log('\npart c\n')
console.log(wallet.toV3('nccu'))