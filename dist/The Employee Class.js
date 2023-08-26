"use strict";
class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    raiseSalary(raise) {
        return (raise / 100) * this.salary;
    }
}
const emp = new Employee("yousef", 12345, 8000);
console.log(emp.getName());
console.log(emp.getId());
console.log(emp.getSalary());
console.log(emp.raiseSalary(15));
console.log(emp.getAnnualSalary());
