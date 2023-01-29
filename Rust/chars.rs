fn main() {

let mut c = 'A';
println!("c {}", c);
c = 'B';
println!("c {}", c);
let mut c2 = '1';
if c2.is_numeric() {
   println!("c2 is numeric {} ", c2);
}

let chars = ['a','b','c','d'];
for i in chars.iter() {
   println!(" char in array {} ", i);
}

let message = "Hellow, World!";
for ch in message.chars() {
  println!("{}", ch);
}

let c3='z';
let c4 = c3.to_uppercase();
println!("c4 {} ", c4);
let c5 = '\u{1F600}';
println!("c5 {}", c5);
}

