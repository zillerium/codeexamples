const Keypair = require('@solana/web3.js').Keypair;
const bs58 = require('bs58');
const nacl = require('tweetnacl');
const SolanaWallet = require('solana-wallet').SolanaWallet;

class SolanaLib {
  constructor(keypair) {
    this.keypair = keypair;
    this.solanaWallet = new SolanaWallet(Buffer.from(keypair.secretKey));
  }

  static init({ secretKey }) {
    const keypair = secretKey ? Keypair.fromSecretKey(secretKey) : Keypair.generate();
    return new SolanaLib(keypair);
  }

  async getAddress() {
    return await this.keypair.publicKey.toBase58();
  }

  getSecretKey() {
    return this.keypair.secretKey.toString();
  }

  async signMessage(message) {
    const signature = nacl.sign.detached(bs58.decode(message), this.keypair.secretKey);
    const bs58Signature = bs58.encode(signature);
    return { signature: bs58Signature };
  }

  async signTransaction(feePayer, recentBlockhash, instructions, partialSignatures) {
    const { signature } = await this.solanaWallet.signTransaction(feePayer, {
      feePayer,
      instructions,
      recentBlockhash,
      partialSignatures: partialSignatures || [],
    });
    return { signature };
  }
}

export default SolanaLib;
