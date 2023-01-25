const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.role = "Engineer";
        this.github = github;

    }
    getGitHub(){
         //code here
    }

    //for test
    printInfo(){
        console.log(`This ${this.role} name is ${this.name}, GitHub ${this.github}, and email: ${this.email}`);
    }
}

//for test
const engineer = new Engineer("Max",115,"maxo@gmail.com","https://github.com/SuperMax");
engineer.printInfo();
engineer.getRole();