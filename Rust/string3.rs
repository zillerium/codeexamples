fn main() {
let mut Str = String::new();
println!("enter a string");
std::io::stdin().read_line(&mut Str);
    println!("string length {} ", Str.len());
    println!("string in uppercase {} ", Str.to_uppercase());
    println!("string in lowercase {} ", Str.to_lowercase());
    println!("first char {} ", Str.chars().nth(0).unwrap());
    println!("last char {} ", Str.chars().nth(Str.len()-2).unwrap());
    println!("remove vowels with * {} ", Str.replace("a","*").replace("e","*").replace("i","*").replace("o","*").replace("u", "*"));
    println!("remove white spaces {} ", Str.replace(" ",""));
}
