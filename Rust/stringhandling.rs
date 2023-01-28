use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a string:");
    io::stdin().read_line(&mut input).unwrap();
    let input = input.trim();
    println!("string length: {}", input.len());
    println!("string in uppercase: {}", input.to_uppercase());
    println!("string in lowercase: {}", input.to_lowercase());
    println!("first char: {}", input.chars().next().unwrap());
    println!("last char: {}", input.chars().next_back().unwrap());
    let vowels = "aeiou";
    let input = input
        .chars()
        .map(|c| if vowels.contains(c) { '*' } else { c })
        .collect::<String>();
    println!("remove vowels with *: {}", input);
    println!("remove white spaces: {}", input.trim());
}
