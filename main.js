// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }

const newUser = {
    name: 'Lisa',
    age: 23,
    car: {
        brand: 'Audi',
        model: 'A5',
        color: 'czarny'
    }
}

// console.log(newUser.name);
// console.log(newUser.age);
// console.log(newUser.car.brand);

console.log(`${newUser.name} jeździ samochodem marki ${newUser.car.brand}, kolo ${newUser.car.color}, ma ${newUser.age} lata.`);