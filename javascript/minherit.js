class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function() {
    return (this.w * this.h);    
}
class Square extends Rectangle {
    constructor(s) {
        super(s,s);
       // this.w = s;
       // this.h = s;
    }
}

 

 

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
 
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

