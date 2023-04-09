import bs58 from 'bs58';

const ipfsListing = "QmWTCizAr4aVmCBwWHavWedGxZefATYEgk1czs9pj2pQz1";
const decoded = bs58.decode(ipfsListing).slice(2);
let j = "0x";

for (const byte of decoded) {
  j += byte.toString(16).padStart(2, '0');
}

console.log(j)


const bytes32Hash = '0x788b2e101df014012e7bd38541ec90ca0bcf8e238af40aa2bc0a15c116fad38e';
const decodedHex = Buffer.from(bytes32Hash.slice(2), 'hex');
const encodedIPFS = bs58.encode(Buffer.concat([Buffer.from([0x12, 0x20]), decodedHex]));

console.log(encodedIPFS); // This will output the original IPFS address

