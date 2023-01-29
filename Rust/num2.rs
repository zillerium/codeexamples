 

fn main() {

    let x: i32 =5;
    println!("x {}", x);
    let y: i32 =10;
    println!("y {}", y);
    let sum: i32 =x+y;
    println!("sum {}", sum);
    let diff: i32 =x-y;
    println!("diff {}", diff);
    let product: i32 =x*y;
    println!("product {}", product);
    let quotient: i32 =x/y;
    println!("quotient {}", quotient);
    let remainder: i32 =x%y;
    println!("remainder {}", remainder);
    let x_squared: i32 =x.pow(2);
    println!("x_squared {}", x_squared);
    let y_cubed: i32 =y.pow(3);
    println!("y_cubed {}", y_cubed);
    let mut x1:i16 = 5;
    if x1&1==1 {println!("is odd"); } else { println!("is even"); }
}
