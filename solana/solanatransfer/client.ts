class MyInstruction {
  constructor(obj: object) {
    for (const key in obj) {
      this[key] = obj[key];
    }
  }
}

const MyInstructionSchema = new Map([
  [
    MyInstruction,
    {
      kind: "struct",
      fields: [
        ["discriminator", "u8"],
        ["amount", "u64"],
      ],
    },
  ],
]);

const encodeIxData = (ix: object = {}) => {
  return Buffer.from(
    borsh.serialize(MyInstructionSchema, new MyInstruction(ix))
  );
};

const fromPubkey = pg.wallet.publicKey;
console.log("from -- ", fromPubkey.toBase58());
const toPubkey = new web3.PublicKey(
  "4dGDp3BuTaXiqJwwJhh9abUBBm6hMhRkidttr5N4Cemm"
);
// Transfer of 1 SOL
const amount = new BN(2 * web3.LAMPORTS_PER_SOL);

 const blockhashInfo = await pg.connection.getLatestBlockhash();

const tx = new web3.Transaction({
  ...blockhashInfo,
});
tx.add(
  new web3.TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [
      { pubkey: fromPubkey, isSigner: true, isWritable: true },
      { pubkey: toPubkey, isSigner: false, isWritable: true },
      {
        pubkey: web3.SystemProgram.programId,
        isSigner: false,
        isWritable: false,
      },
    ],
    data: encodeIxData({ discriminator: 0, amount }),
  })
);

 
(async () => {
  const balance = await pg.connection.getBalance(fromPubkey);
  console.log(`SOL balance: ${balance / web3.LAMPORTS_PER_SOL}`);
})();
console.log("tx ---------1 ",tx);
(async () => {tx.sign(pg.wallet.keypair)})();
console.log("tx ---------2 ",tx)
// Send the transaction to the Solana cluster
const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);

 
//console.log("Tx signature:", txHash);


/*class MyInstruction {
  constructor(obj: object) {
    for (const key in obj) {
      this[key] = obj[key];
    }
  }
}
import { TransactionInstruction } from '@solana/web3.js'
console.log(pg.PROGRAM_ID.toString());
// Get latest blockhash info
const blockhashInfo = await pg.connection.getLatestBlockhash();
console.log(blockhashInfo);
// Create transaction
const tx = new web3.Transaction({
  ...blockhashInfo,
});
console.log("tx ==", tx);
const programId = new web3.PublicKey(pg.PROGRAM_ID.toString());

// Add our hello world program instruction
const account1 = new web3.PublicKey("BkQTFDah5ogoy9FtcGKKvQr67cjrZABDYVY9om9o188s");
// 4dGDp3BuTaXiqJwwJhh9abUBBm6hMhRkidttr5N4Cemm
const account2 = new web3.PublicKey("4dGDp3BuTaXiqJwwJhh9abUBBm6hMhRkidttr5N4Cemm");

const amount = new BN(1000);
console.log("ends ")
 
const MyInstructionSchema = new Map([
 [
   MyInstruction,
   {
     kind: "struct",
     fields: [
       ["discriminator", "u8"],
       ["amount", "u64"],
     ],
   },
 ],
]);

const encodeIxData = (ix: object = {}) => {
 return Buffer.from(
   borsh.serialize(MyInstructionSchema, new MyInstruction(ix))
 );
};

tx.add(
 new web3.TransactionInstruction({
   programId: pg.PROGRAM_ID,
   keys: [
     { pubkey: account1, isSigner: true, isWritable: true },
     { pubkey: account2, isSigner: false, isWritable: true },
     {
       pubkey: web3.SystemProgram.programId,
       isSigner: false,
       isWritable: false,
     },
   ],
   data: encodeIxData({ discriminator: 0, amount }),
 })
);//
console.log(tx);

console.log("tx added ", tx);
// Sign transaction
tx.sign(pg.wallet.keypair);
// Send the transaction to the Solana cluster
const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);
*/

