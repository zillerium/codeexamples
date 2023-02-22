import {TransactionInstruction} from '@solana/web3.js'
console.log(pg.PROGRAM_ID.toString());
// Get latest blockhash info
const blockhashInfo = await pg.connection.getLatestBlockhash();
console.log(blockhashInfo);
// Create transaction
const tx = new web3.Transaction({
  ...blockhashInfo,
});
console.log("tx ==",tx);
const programId = new web3.PublicKey(pg.PROGRAM_ID.toString());

// Add our hello world program instruction
const account1 = new web3.PublicKey("BkQTFDah5ogoy9FtcGKKvQr67cjrZABDYVY9om9o188s");
// 4dGDp3BuTaXiqJwwJhh9abUBBm6hMhRkidttr5N4Cemm
const account2 = new web3.PublicKey("4dGDp3BuTaXiqJwwJhh9abUBBm6hMhRkidttr5N4Cemm");

const amount = 1000;
 

// encode the payment instruction
 
const instructionObject = new TransactionInstruction({
  instruction, 
  amount,
})
tx.add(
  new web3.TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [
      {pubkey: account1, isSigner: false, isWritable: true},
      {pubkey: account2, isSigner: false, isWritable: true},
      // add any additional keys here
    ],
    //data: Buffer.from([]),
      data: instructionObject.toBuffer(),

   
  })
);
console.log("tx added ", tx);
// Sign transaction
tx.sign(pg.wallet.keypair);
// Send the transaction to the Solana cluster
const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);



