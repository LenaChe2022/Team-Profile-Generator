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

    createHtmlCard(){
        this.card=`
        <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${this.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                            <li class="list-group-item">GitHub: <a href=https://github.com/${this.github}">${this.github}</a></li>
                        </ul>
                    </div>
                </div>
        `;
        return this.card;
    }
}

//for test
//const engineer = new Engineer("Max",115,"maxo@gmail.com","https://github.com/SuperMax");
//engineer.printInfo();
//engineer.getRole();

module.exports = Engineer;