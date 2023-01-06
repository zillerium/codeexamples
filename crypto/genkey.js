import {generateKeyPairSync, publicEncrypt, privateDecrypt, createSign, createVerify} from 'crypto';

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
const message = "this is a test";
//console.log(x);
console.log(publicKey);
console.log(privateKey);

const encData = publicEncrypt(publicKey, Buffer.from(message));
const decData = privateDecrypt(privateKey, Buffer.from(encData));

	console.log(encData.toString('hex'));
	console.log(decData.toString('utf-8'));

const signer = createSign('rsa-sha256');
signer.update(message);
const signature = signer.sign(privateKey, 'hex');
console.log(signature);

const verifier = createVerify('rsa-sha256');
verifier.update(message);
const isVerified = verifier.verify(publicKey, signature, 'hex');
console.log(isVerified);


