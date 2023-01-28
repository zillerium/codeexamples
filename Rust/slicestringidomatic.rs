fn main() {
    let mut input = String::new();
    println!("enter a string");
    std::io::stdin().read_line(&mut input).unwrap();
    let input = input.trim(); // remove leading and trailing whitespaces
    let words: Vec<&str> = input.split_whitespace().collect(); // split the input into words

    println!("first word: {}", words[0]);
    println!("last word: {}", words[words.len() - 1]);
    if words.len() > 2 {
        println!("middle words: {:?}", &words[1..words.len() - 1]);
    }
    println!("word count: {}", words.len());
    println!("word vowels: {}", remove_vowels(input));
    println!("sentence in reverse: {}", reverse_sentence(input));
}

fn remove_vowels(s: &str) -> String {
    let vowels = vec!['a', 'e', 'i', 'o', 'u'];
    s.chars().map(|c| if vowels.contains(&c) { '*' } else { c }).collect()
}

fn reverse_sentence(s: &str) -> String {
    let words: Vec<&str> = s.split_whitespace().collect();
    words.iter().rev().collect::<Vec<_>>().join(" ")
}
