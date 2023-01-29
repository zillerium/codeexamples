fn main() {
    let mut array = [1, 2, 3, 4, 5];

    println!("length: {}", array.len());
    println!("first and last: {} {}", array[0], array[array.len() - 1]);

    for number in array.iter() {
        println!("element: {}", number);
    }

    let mut squared_numbers: [i32; 5] = [1, 2, 3, 4, 5];
    for number in squared_numbers.iter_mut() {
        *number = number.pow(2);
    }

    println!("squared numbers: {:?}", squared_numbers);
    squared_numbers.sort();
    for number in squared_numbers.iter() {
        println!("element: {}", number);
    }

    let sum: i32 = array.iter().sum();
    println!("sum: {}", sum);

    array.sort();
    println!("min: {}", array[0]);
    println!("max: {}", array[array.len() - 1]);
}
