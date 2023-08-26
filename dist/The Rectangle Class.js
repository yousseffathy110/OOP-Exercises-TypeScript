"use strict";
class Rectangle {
    constructor(length, width) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return ((this.length + this.width) * 2);
    }
}
const R = new Rectangle(1.5, 4.8);
console.log(R.getArea());
console.log(R.getPerimeter());
