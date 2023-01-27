const inquirer = require('inquirer');
const fs = require('fs');

class Employee {
    constructor (name,id,email){
        this.name  = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName(){
        inquirer
      .prompt([
         {type: 'input',
           message: `What is the ${this.role}'s name?`,
           name: 'name',  
         }])
     .then((data) => {
        this.name = data.name;
        if (!this.name){
            let message = 'no input provided';
            console.error (`\n\x1b[31m${message}`);
            process.exit(0); 
        } 
     console.log(`The name is ${this.name}`);
     return this.name;
    })
    }

    getID(){
        inquirer
      .prompt([
         {type: 'input',
           message: `What is the ${this.role}'s id?`,
           name: 'id',  
         }])
     .then((data) => {
        this.id = data.id;
        if (!this.id){
            let message = 'no input provided';
            console.error (`\n\x1b[31m${message}`);
            process.exit(0); 
        }   
     console.log("this is id:" + this.id);
     return this.id;
     })
    }

    getEmail(){
        inquirer
      .prompt([
         {type: 'input',
           message: `What is the ${this.role}'s email`,
           name: 'email',  
         }])
     .then((data) => {
        this.email = data.email;
        if (!this.email){
            let message = 'no input provided';
            console.error (`\n\x1b[31m${message}`);
            process.exit(0); 
        }   
     console.log("this is email:" + this.email);
     return this.email;
     })
    }

    getRole(){
        //TODO: should return "Employee"
        console.log(this.role);
        return this.role;
    }
}

const employee = new Employee;
//employee.getRole();

module.exports = Employee;