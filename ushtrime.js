//name 
//lastname
//age
//country
//city

const user = {
    name: 'Shkumbin',
    lastname: 'Hajdari',
    age: 31,
    country: {
        name: 'Kosovo',
        city: {
            name: 'Prizren',
        },
    },
};

const fullName = `${user.name} ${user.lastname}`;
console.log(fullName);

let fullName1 = `${user.name} ${user.lastname} is ${user.age} years old from ${user.country.name}/${user.country.city.name}`;
console.log(fullName1);


