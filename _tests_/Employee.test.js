
const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('creates an Employee object', () =>{
        const name = 'Max';
        const id = 12;
        const email = "max@email.com";

        const obj = new Employee(name,id,email);

        expect(obj.name).toEqual(name);
        });

    });
