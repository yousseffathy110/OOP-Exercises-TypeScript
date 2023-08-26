class Rectangle{
    private length : number
    private width : number
    constructor(length : number , width : number){
        this.width = width
        this.length = length
    }

    getArea() : number{
        return this.length * this.width
    }

    getPerimeter() : number{
        return ((this.length + this.width) * 2)
    }
}

const R = new Rectangle(1.5 , 4.8)
console.log(R.getArea())
console.log(R.getPerimeter())