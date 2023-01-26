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

    createHtmlCard(){
        this.card=`
        <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${this.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
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

//for test
// const manager = new Manager("Eric",124,"boss@gmail.com",25);
// manager.printInfo();
// manager.getRole();

module.exports=Manager;