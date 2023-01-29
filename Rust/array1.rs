fn main() {
  let mut array: [i32;5]=[1,2,3,4,5];
  println!("length {} ", array.len());
  println!("first and last  {} {} ", array[0], array[array.len()-1]);
  for i in 0..array.len() {
     println!("element {} ", array[i]);
  }
  let mut squared_numbers: [i32;5]=[1,2,3,4,5];
  for i in 0..array.len() {
     squared_numbers[i]=array[i]*array[i];
  }
  println!("squared numbers {}", squared_numbers[4]);

  squared_numbers.sort();
  for i in 0..squared_numbers.len() {
     println!("element {} ", squared_numbers[i]);
  }
  let mut sum: i32 = 0;
  for i in 0..array.len() {
     sum = sum + array[i];
  }
  println!(" sum {} ", sum);
  array.sort();
  let sarray: [i32;5] = array;
  println!("min {} ", sarray[0]);
  println!("max {} ", sarray[array.len()-1]);
}

