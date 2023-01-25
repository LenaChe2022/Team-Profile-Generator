const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.role = "Intern";
        this.school = school;

    }
    getSchool(){
         //code here
    }

    //for test
    printInfo(){
        console.log(`This ${this.role} name is ${this.name}, graduated ${this.school}, and email: ${this.email}`);
    }
}

//for test
const intern = new Intern("Marco",128,"marco@gmail.com","UW");
intern.printInfo();
intern.getRole();