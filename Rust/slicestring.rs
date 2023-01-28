fn main() {
    let mut input = String::new();
    println!("Enter a string:");

    match std::io::stdin().read_line(&mut input) {
        Ok(_) => {
            let input = input.trim();
            let f_word = first_word(&input);
            let l_word = last_word(&input);
            let c_word = count_words(&input);
            println!("First word: {}", &input[..f_word]);
            println!("Last word: {}", &input[l_word..]);
            println!("Middle words: {}", &input[f_word + 1..l_word - 1]);
            println!("Word count: {}", c_word);

            let no_vowels = remove_vowels(&input);
            println!("String with vowels removed: {}", no_vowels);
        }
        Err(error) => eprintln!("Error reading input: {}", error),
    }
}

fn first_word(s: &str) -> usize {
    s.find(' ').unwrap_or(s.len())
}

fn last_word(s: &str) -> usize {
    s.rfind(' ').map_or(0, |i| i + 1)
}

fn count_words(s: &str) -> usize {
    s.split(' ').count()
}

fn remove_vowels(s: &str) -> String {
    s.chars().filter(|c| !"aeiouAEIOU".contains(c)).collect()
}
