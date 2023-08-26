class Employee{

    private name : string;
    private id : number;
    private salary : number;

    constructor(name : string, id : number, salary : number){
        this.name=name
        this.id=id
        this.salary=salary
    }

    getId() : number{
        return this.id
    }
    getName() : string{
        return this.name
    }
    getSalary() : number{
        return this.salary
    }

    getAnnualSalary() : number{
        return this.salary * 12
    }
    
    raiseSalary(raise : number){
        return (raise/100) * this.salary 
    }

}

const emp = new Employee("yousef", 12345, 8000)

console.log(emp.getName())
console.log(emp.getId())
console.log(emp.getSalary())
console.log(emp.raiseSalary(15))
console.log(emp.getAnnualSalary())