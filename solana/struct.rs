struct MyStruct {
    my_field: i32,
}

impl MyStruct {
    fn dbl(&mut self)  -> i32  {
 
            self.my_field *= 2;
            self.my_field
 
    }
}

fn main() {
    let mut my_struct = MyStruct { my_field: 42 };
    let new_structval = my_struct.dbl();
   // println!("Original value of my_field: {}", my_struct.my_field);
//    println!("New value of my_field: {}", new_struct.my_field);
}
