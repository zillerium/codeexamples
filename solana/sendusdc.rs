271 const payeePublicKey = new PublicKey(payeeUsdcAddr);
272 
273 const payerUsdcAddress = await getAssociatedTokenAddress(usdcMintKey, publicKey);
274 const payeeUsdcAddress = await getAssociatedTokenAddress(usdcMintKey, payeePublicKey);
275 const payeeUsdcAmountBN = Number(payeeUsdcAmount);
276 const transactionInstruction = new TransactionInstruction({
277   programId,
278   keys: [
279     {pubkey: fromPublicKey, isSigner: false, isWritable: true},
280     {pubkey: toPublicKey, isSigner: false, isWritable: true},
281     { pubkey: SystemProgram.programId, isSigner: false, isWritable: true},
282     // add any additional keys here
283     { pubkey: usdcMintKey, isSigner: false, isWritable: true},
284     { pubkey: payerUsdcAddress, isSigner: false, isWritable: true},
285     { pubkey: payeeUsdcAddress, isSigner: false, isWritable: true},
286   ],
287   data: encodeIxData({ discriminator: 0, payeeUsdcAmountBN }),
288 });
289 
gtihub
