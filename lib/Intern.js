const Employee = require('./Employee');
const inquirer = require('inquirer');
const fs = require('fs');

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.role = "Intern";
        this.school = school;
    }
    
    getSchool(){
        inquirer
      .prompt([
         {type: 'input',
           message: `What is the ${this.role}'s school?`,
           name: 'school',  
         }])
     .then((data) => {
        this.school = data.school;
        if (!this.school){
            let message = 'no input provided';
            console.error (`\n\x1b[31m${message}`);
            process.exit(0); 
        }   
     console.log("this is education:" + this.school);
     return this.school;
     })
    }

    getRole(){
        console.log(this.role);
        return this.role;
    }

    printInfo(){
        console.log(`This ${this.role} name is ${this.name}, graduated ${this.school}, and email: ${this.email}`);
    }

    createHtmlCard(){
        this.card=`
        <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${this.name}</h2>
                        <h3 class="card-title">${this.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                            <li class="list-group-item">School: ${this.school}</li>
                        </ul>
                    </div>
                </div>
        `;
        return this.card;
    }
}


module.exports=Intern