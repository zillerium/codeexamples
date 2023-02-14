// client code to run using the pg and testing hello world
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

tx.add(
  new web3.TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [
      {pubkey: account1, isSigner: false, isWritable: true},
      // add any additional keys here
    ],
    data: Buffer.from([]),
  })
);
console.log("tx added ", tx);
// Sign transaction
tx.sign(pg.wallet.keypair);
// Send the transaction to the Solana cluster
const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);
