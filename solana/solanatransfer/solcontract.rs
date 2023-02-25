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

    msg!("Transfering {} lamports from {} to {}", amount, from, to);

    let transfer_ix = system_instruction::transfer(from, to, amount);
    invoke(&transfer_ix, accounts)
}
