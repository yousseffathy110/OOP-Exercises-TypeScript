"use strict";
class Circle {
    constructor(raduis) {
        this.raduis = raduis;
    }
    getRadius() {
        return this.raduis;
    }
    getArea() {
        return ((this.raduis ** 2) * Math.PI);
    }
    getCircumference() {
        return (this.raduis * 2 * Math.PI);
    }
}
const C = new Circle(3.254);
console.log(C.getArea());
console.log(C.getCircumference());
