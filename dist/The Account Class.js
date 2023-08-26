"use strict";
class Account {
    constructor(id, name, balance) {
        this.balance = 0;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    credit(amount) {
        this.balance += amount;
    }
    debit(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Amount exceeded balance !");
        }
    }
    transferTo(AnotherAcc, amount) {
        if (amount <= this.balance) {
            console.log("Money has been transfered");
        }
        else {
            console.log("Amount exceeded balance !");
        }
    }
    getBalance(id) {
        if (this.id == id) {
            return this.balance;
        }
        else {
            return "Wrong id !!!!";
        }
    }
}
const Acc = new Account(8061, "yousef fathy", 8000);
console.log(Acc.getBalance(8061));
Acc.credit(7700);
Acc.debit(1000);
console.log(Acc.getBalance(8061));
