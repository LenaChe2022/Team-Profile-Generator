const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('creates an Intern object', () =>{
        const name = 'Max';
        const id = 12;
        const email = "max@email.com";
        const school = 'UW';

        const obj = new Intern(name,id,email,school);

        expect(obj.school).toEqual(school);
        });

    });
