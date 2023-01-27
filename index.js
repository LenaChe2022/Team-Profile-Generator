const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


class Generator{
constructor(){
    this.htmlFileText='';
    this.message = '';
}

welcome() {
    console.log(`
    Welcome to the Team Generator!
    Use 'npm run reset' to reset the dist/folder.`);
    this.managerCreate();
}

managerCreate(){
    console.log('\n Please build your team.');
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
fileCreate(){
this.wholeText = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-5 mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            
            ${this.htmlFileText}

            </div>
            </div>
        </div>
    
    </body>
    
    </html> `; 

console.log(this.wholeText);

this.writeToFile(this.wholeText);

// fs.writeFile('./dist/index.html',`${this.wholeText}`,(err)=>
// err ? console.error(err) : console.log('Success!'));
}

writeToFile(data){
    //fs.appendFileSync('./dist/index.html',`${data}`,'utf8');
    fs.writeFileSync('./dist/index.html',`${data}`,'utf8');
}

    quit() {
        this.fileCreate();
        this.message = (`
        Thank you!
        A new HTML file with all your team generated!`);
        console.log(`\x1b[36m${this.message}\x1b[0m`);
        process.exit(0);
      }

}

const generator = new Generator;
//generator.welcome();

