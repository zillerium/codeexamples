fn main() {
    let x = 5;
    let y = 10;
    println!("x: {}", x);
    println!("y: {}", y);
    println!("sum: {}", x + y);
    println!("diff: {}", x - y);
    println!("product: {}", x * y);
    println!("quotient: {}", x / y);
    println!("remainder: {}", x % y);
    println!("x squared: {}", x.pow(2));
    println!("y cubed: {}", y.pow(3));
    if x % 2 == 1 {
        println!("x is odd");
    } else {
        println!("x is even");
    }
}
