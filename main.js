// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }

// const newUser = {
//     name: 'Lisa',
//     age: 23,
//     car: {
//         brand: 'Audi',
//         model: 'A5',
//         color: 'czarny'
//     }
// }

// console.log(newUser.name);
// console.log(newUser.age);
// console.log(newUser.car.brand);

// console.log(`${newUser.name} jeździ samochodem marki ${newUser.car.brand}, kolo ${newUser.car.color}, ma ${newUser.age} lata.`);

// ---------------------------------------------------- metody w obiektach

// const newUser = {
//     name: 'Lisa',
//     age: 23,
//     car: {
//         brand: 'Audi',
//         model: 'A5',
//         color: 'czarny',
//         sound() {
//             console.log('brum brum');
//         }
//     }
// }

// newUser.car.sound()

// ---------------------------------------------------- dodawanie rzeczy do obiektow

// const user = {
//     name: 'Klaudia',
//     age: 23,
//     'fav-color': 'czerwony'
// }

// user.country = 'Polska'
// // user.fav-color
// user['fav-color'] = 'niebieski'

// console.log(user);

// const dogName = 'Drops'
// const dogAge = 5

// const dog = {
//     // klucz: wartość
//     // name: dogName,
//     // age: dogAge

//     dogName,
//     dogAge
// }

// console.log(dog);

// ---------------------------------------------------- pętla for in

// const user = {
//     name: 'Klaudia',
//     age: 23,
//     sex: 'female',
//     'hair-color': 'blonde'
// }

// for(const data in user) {
//     console.log(data + ': ' +user[data]);
// }

// ---------------------------------------------------- this

// const user = {
//     name: 'Lily',
//     showName() {
//         console.log(this);
//         console.log(user.name);
//     }
// }

// user.showName()

// ---------------------------------------------------- konstruktor

// function User(name, age) {
//     this.name = name
//     this.age = age
//     this.hello = function() {
//         console.log(`Cześć ${this.name}`);
//     }
// }

// const user = {
//     name: 'Klaudia',
//     age: 23,
// }

// const newUser = new User('Klaudia, 23')
// const newUser2 = new User('Lily', 34)

// newUser2.hello()


// ---------------------------------------------------- prototype

function User(name, age) {
    this.name = name
    this.age = age
}

const newUser = new User('Klaudia, 23')
const newUser2 = new User('Lily', 34)
const newUser3 = new User('Majek', 45)

console.log(newUser, newUser2, newUser3);

User.prototype.hello = function () {
    console.log(`Cześć ${this.name}`);
}

User.prototype.country = 'Polska'

console.log(newUser2.country);

newUser3.hello()