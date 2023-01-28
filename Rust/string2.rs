fn main() {
    let mut Str = String::new();
    println!("Enter a string:");
    std::io::stdin().read_line(&mut Str).expect("Error reading input");
    let Str = Str.trim();
    println!("string length: {}", Str.len());
    println!("string in uppercase: {}", Str.to_uppercase());
    println!("string in lowercase: {}", Str.to_lowercase());
    println!("first char: {}", Str.chars().next().unwrap());
    println!("last char: {}", Str.chars().next_back().unwrap());
    let mut vowels = "aeiou".to_string();
    let re = Regex::new(&format!("[{}]", vowels)).unwrap();
    let Str = re.replace_all(&Str, "*");
    println!("remove vowels with *: {}", Str);
    println!("remove white spaces: {}", Str.trim());
}
