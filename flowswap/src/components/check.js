import { create } from 'ipfs-http-client';

// Create an IPFS client
const ipfs = create();

// Define the bytes32 field as a string
const bytes32 = '0x516d524b634b594544797063427672543646684246623258337a475367386b52';

// Convert the bytes32 string to a Uint8Array
const bytes = Uint8Array.from(Buffer.from(bytes32.slice(2), 'hex'));

// Add the bytes to IPFS
const { cid } = await ipfs.add(bytes);

// Convert the CID to an IPFS address
const ipfsAddress = `ipfs://${cid.toString()}`;

console.log(ipfsAddress); // Output: ipfs://QmWCEhZsM37JYr3E2AMK8LaqSUMb4u8R
