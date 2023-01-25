const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,id,email);
        this.role = "Manager";
        this.officeNumber = office;

    }

    //for test
    printInfo(){
        console.log(`This ${this.role} name is ${this.name}, office number ${this.officeNumber}, and email: ${this.email}`);
    }
}

//for test
const manager = new Manager("Eric",124,"boss@gmail.com",25);
manager.printInfo();
manager.getRole();