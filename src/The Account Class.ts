class Account{
    private id : number
    private name : string
    private balance : number = 0

    constructor(id : number, name : string, balance : number){
        this.id = id
        this.name = name
        this.balance = balance
    }

    credit(amount : number) : void{
        this.balance += amount
    }

    debit(amount : number) : void{
        if (amount <= this.balance){
            this.balance -= amount
        }else{
            console.log("Amount exceeded balance !")
        }
    }

    transferTo(AnotherAcc : number , amount : number) : void{
        if (amount <= this.balance){
            console.log("Money has been transfered")
        }else{
            console.log("Amount exceeded balance !")
        }
    }

    getBalance(id : number) : string | number{
        if(this.id == id){
            return this.balance
        }else{
           return "Wrong id !!!!"
        }
    }
}


const Acc = new Account(8061 , "yousef fathy" , 8000)

console.log(Acc.getBalance(8061))
Acc.credit(7700)
Acc.debit(1000)
console.log(Acc.getBalance(8061))