fn main() {

let tuple = ("john", 32, true);
let (name, age, travelling) = tuple;
println!(" name {} ", name);
println!(" age {} ", age);
println!(" travelling {} ", travelling);

let tuple2= (age, travelling, name);
println!(" new tuple {:?} ", tuple2);
let newvar = tuple.1;
println!(" mew var {} ", newvar);

 

}
