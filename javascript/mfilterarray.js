function filter_list(l) {
  // Return a new array with the strings filtered out
  var x = [];
  for (i in l) {
    if (Number.isInteger(l[i])) {
      x.push(l[i]);
    }
    
  }
  return x;
}

 
 
    console.log("start")
    y = filter_list([1,2,3,'f','g']);
    console.log(y);
 