class Circle{
    private raduis : number
    constructor(raduis : number){
        this.raduis  = raduis
    }
    getRadius() : number{
        return this.raduis
    }
    getArea() : number{
        return ((this.raduis ** 2) * Math.PI)
    }
}

const C = new Circle(3.254)
console.log(C.getArea())