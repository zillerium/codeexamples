fn square_sum(vec: Vec<i32>) -> i32 {
    let mut temp = 0;
    for _i in vec.iter() {
        temp += i32::pow(*_i, 2);
    }
    temp
}
  
fn square_sum(vec: Vec<i32>) -> i32 {
    vec.iter().map(|s| s * s).sum()
} 
  
#[test]
fn returns_expected() {
    assert_eq!(square_sum(vec![1, 2]), 5);
    assert_eq!(square_sum(vec![-1, -2]), 5);
    assert_eq!(square_sum(vec![5, 3, 4]), 50);
    assert_eq!(square_sum(vec![]), 0);
}
