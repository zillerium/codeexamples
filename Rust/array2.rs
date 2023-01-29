fn main() {
    let array = [1, 2, 3, 4, 5];
    println!("length {}", array.len());

    let first = array.first().unwrap();
    let last = array.last().unwrap();
    println!("first and last {} {}", first, last);

    for element in array.iter() {
        println!("element {}", element);
    }

    let squared_numbers: Vec<i32> = array.iter().map(|x| x * x).collect();
    println!("squared numbers {}", squared_numbers[4]);

    let mut sorted_squared_numbers = squared_numbers;
    sorted_squared_numbers.sort();
    for element in sorted_squared_numbers.iter() {
        println!("element {}", element);
    }

    let sum: i32 = array.iter().sum();
    println!("sum {}", sum);

    let min = array.iter().min().unwrap();
    let max = array.iter().max().unwrap();
    println!("min {}", min);
    println!("max {}", max);
}
