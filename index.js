const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


class Generator{
constructor(){
    this.htmlFileText='';
}

welcome() {
    console.log(`
    Welcome to the Team Generator!
    Use 'npm run reset' to reset the dist/folder.`);
    this.managerCreate();
}

managerCreate(){
    console.log('Please build your team.');
    inquirer
      .prompt([
         {type: 'input',
           message: "What is the team manager's name?",
           name: 'managerName',  
         },
         {type: 'input',
           message: "What is the team manager's id?",
           name: 'managerId',  
         },
         {type: 'input',
           message: "What is the team manager's email?",
           name: 'managerEmail',  
         },
         {type: 'input',
           message: "What is the team manager's office number?",
           name: 'managerOffice',  
         }
       ])
       .then((data) => {
        this.manager = new Manager (data.managerName, data.managerId,data.managerEmail,data.managerOffice);
        //this.manager.printInfo();
        this.htmlFileText += this.manager.createHtmlCard();
        console.log(this.htmlFileText);
        this.newteamMemberCreate();
       })
       //.then((data) =>  this.newteamMemberCreate());
}

newteamMemberCreate() {
    inquirer
      .prompt([
         {type: 'list',
           message: "Which type of team member whould you like to add?",
           choices: ["Engeneer","Intern","I don't want to add any more team member."],
           name: 'choise',  
         },])
      .then((data) => {
        switch(data.choise){
            case "Engeneer":
              this.engeneerCreate();
              break;
            case "Intern":
             this.internCreate();
             break;
            case "I don't want to add any more team member.":
              this.quit(); 
              break;
            default:
                this.quit(); 
        }
      })   
}

engeneerCreate(){
    inquirer
      .prompt([
         {type: 'input',
           message: "What is your Engineer's name?",
           name: 'engineerName',  
         },
         {type: 'input',
           message: "What is your Engineer's id?",
           name: 'engineerId',  
         },
         {type: 'input',
           message: "What is your Engineer's email?",
           name: 'engineerEmail',  
         },
         {type: 'input',
           message: "What is your Engineer's GitHub usernsme?",
           name: 'gitHubName',  
         }
       ])
       .then((data) => {
        this.engineer = new Engineer (data.engineerName, data.engineerId,data.engineerEmail,data.gitHubName);
        
        this.htmlFileText += this.engineer.createHtmlCard();
        console.log(this.htmlFileText);
        this.newteamMemberCreate();
       });
}

internCreate(){}

//TODO a function creates an HTML file with input data
fileCreate(){}

    quit() {
        this.fileCreate();
        console.log(`
        Thank you!
        A new HTML file with all your team generated!`);
        process.exit(0);
      }

}

const generator = new Generator;
generator.welcome();