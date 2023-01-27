const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('creates an Manager object', () =>{
        const name = 'Max';
        const id = 12;
        const email = "max@email.com";
        const office = 132;

        const obj = new Manager(name,id,email,office);

        expect(obj.officeNumber).toEqual(office);
        });

    });
