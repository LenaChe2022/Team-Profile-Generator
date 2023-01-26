class Employee {
    constructor (name,id,email){
        this.name  = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName(){
        //TODO create getName method ???
    }
    getID(){
// code here
    }
    getEmail(){
        //code here
    }
    getRole(){
        //TODO: should return "Employee"
        console.log(this.role);
        return this.role;
    }
}


module.exports = Employee;