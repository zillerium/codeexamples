use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program::invoke,
    pubkey::Pubkey,
    system_instruction,
};

// Import the token program
use spl_token::instruction::transfer;

#[derive(BorshSerialize, BorshDeserialize)]
pub enum MyInstruction {
    Transfer { amount: u64 },
}

entrypoint!(process_instruction);

pub fn process_instruction(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    match MyInstruction::try_from_slice(instruction_data)? {
        MyInstruction::Transfer { amount } => process_transfer(accounts, amount),
    }
}

fn process_transfer(accounts: &[AccountInfo], amount: u64) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    let from = next_account_info(accounts_iter)?.key;
    let to = next_account_info(accounts_iter)?.key;

    // Get the token account for USDC
    let token_account = next_account_info(accounts_iter)?;

    // Get the token program id
    let token_program_id = next_account_info(accounts_iter)?.key;

    msg!("Transfering {} USDC from {} to {}", amount, from, to);

    // Create the token "Transfer" instruction
    let transfer_ix = transfer(
        token_program_id,
        from,
        to,
        &token_account.key,
        &[],
        amount,
    )?;

    // Invoke the token "Transfer" instruction
    invoke(&transfer_ix, accounts)
}
