import {generateKeyPairSync} from 'crypto';

const {privateKey, publicKey} = generateKeyPairSync('rsa', {
//const x= generateKeyPairSync('rsa', {
  modulusLength: 2048,
	publicKeyEncoding: {
           type: 'spki',
		format: 'pem',

	},
	privateKeyEncoding: {
           type: 'pkcs8',
		format: 'pem',
	},

});

//console.log(x);
console.log(publicKey);
console.log(privateKey);
