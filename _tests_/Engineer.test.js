const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('creates an Engineer object', () =>{
        const name = 'Max';
        const id = 12;
        const email = "max@email.com";
        const github = 'SuprMax';

        const obj = new Engineer(name,id,email,github);

        expect(obj.github).toEqual(github);
        });

    });
