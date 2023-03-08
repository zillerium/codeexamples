fn repeat_str(src: &str, count: usize) -> String {
  
    let mut owned_string: String = String::new();
    let borrowed_string: &str = "world";
    for _i in 0..count {
        owned_string.push_str(src);
    }
    owned_string
   
}
fn repeat_str(src: &str, count: usize) -> String {
  src.repeat(count)
}

fn repeat_str(src: &str, count: usize) -> String {
  std::iter::repeat(src).take(count).collect()
}


#[test]
fn example_tests() {
  assert_eq!(repeat_str("a", 4), "aaaa");
  assert_eq!(repeat_str("hello ", 3), "hello hello hello ");
  assert_eq!(repeat_str("abc", 2), "abcabc");
}
