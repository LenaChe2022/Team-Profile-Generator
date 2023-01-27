const Employee = require('./Employee');
const inquirer = require('inquirer');
const fs = require('fs');

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,id,email);
        this.role = "Manager";
        this.officeNumber = office;
    }

    printInfo(){
        console.log(`This ${this.role} name is ${this.name}, office number ${this.officeNumber}, and email: ${this.email}`);
    }

    getOffice(){
        inquirer
      .prompt([
         {type: 'input',
           message: `What is the ${this.role}'s office number?`,
           name: 'office',  
         }])
     .then((data) => {
        this.office = data.office;
        if (!this.office){
            let message = 'no input provided';
            console.error (`\n\x1b[31m${message}`);
            process.exit(0); 
        }   
     console.log("this is office:" + this.office);
     return this.office;
     })
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
                            <li class="list-group-item">Office number: ${this.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;
        return this.card;
    }
}


module.exports=Manager;