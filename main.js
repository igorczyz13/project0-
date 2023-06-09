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

// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// const newUser = new User('Klaudia, 23')
// const newUser2 = new User('Lily', 34)
// const newUser3 = new User('Majek', 45)

// console.log(newUser, newUser2, newUser3);

// User.prototype.hello = function () {
//     console.log(`Cześć ${this.name}`);
// }

// User.prototype.country = 'Polska'

// console.log(newUser2.country);

// newUser3.hello()

// console.log(this)

// this w zwykłej funkcji wskazuje na obiekt, który jest na lewo od kropki

// const person = {
//     name: 'Lisa',
//     'fav-meal': 'ramen',
//     address: {
//         city: 'Kraków',
//         'zip-code': '30-009',
//         showCity: function () {
//             console.log(this);
//         }
//     }
// }

// person.address.showCity()

// this w konstruktorze wskazuje na obiekt, stworzony na podstawie konstruktora

// function Food(name) {
//     this.name = name
// }

// const meal = new Food('Ramenik')
// const meal2 = new Food('Green Tea')

// console.log(meal, meal2);

// // this w listenerach


// const btns = document.querySelectorAll('button')

// btns.forEach(btn => btn.addEventListener('click', (e) => {
//     console.log(this);
//     console.log('---');
//     console.log(e.target);
//     console.log('----');
// })
// )

// this w funkcji strzałkowej

// const ob = {
//     number: 123,
//     showNumber() {
//         console.log(this.number);
//     },
//     showNumber2() {
//         const test = () => {
//             console.log(this.number);
//             console.log(this);
//         }
//         test()
//     }
// }

// ob.showNumber()
// ob.showNumber2()

// BIND

// function test() {
//     console.log(this);
//     console.log(this.name);
// }

// const car1 = {
//     name: 'Audi',
// }

// const car2 = {
//     name: 'BMW',
// }

// const car3 = {
//     name: 'Fiat',
// }

// test.bind(car1)()

// call&apply

// const movie = {
//     title: 'Avengers',
// }

// function showMovie(price, cinema) {
//     console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}.`);
// }

// showMovie(30, 'SuperKino')

// // funkcja.call(OBIEKT, ARGUMENT)
// showMovie.call(movie, 35, 'SuperKino2')

// // funkcja.apply(OBIEKT, TABLICA)
// const movieData = [40, 'Super2']

// showMovie.apply(movie, movieData)

// klasy - stara metoda

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.sayHI = function () {
//     console.log(`Czesc, jestem ${this.name}!`);
// }

// Person.prototype.showAge = function () {
//     console.log(`Mam ${this.age} lata!`);
// }

// const person1 = new Person('Igor', 27)
// person1.sayHI()
// person1.showAge()

// klasy - nowy sposob

// class Person2 {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     sayHI() {
//         console.log(`Czesc, jestem ${this.name}!`);
//     }

//     showAge() {
//         console.log(`Mam ${this.age} lata!`);
//     }
// }

// const person2 = new Person('Franek', 34)
// person2.sayHI()
// person2.showAge()

// extends & super

// class Animal {
//     constructor(name) {
//         this.name = name
//     }

//     sound() {
//         console.log(`Zwierzak robi hau hau`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name)
//         this.age = age
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log('miau');
//     }
// }

// const dog = new Dog('Gamoń', 10)
// const cat = new Cat('Pawent')
// cat.sound()
// dog.sound()
// console.log(cat);

// object.assign

// const user = {
//     name: 'Lily',
//     age:  23
// }

// const pet = {
//     name: 'Drops',
//     type: 'dog'
// }

// const userInfo = Object.assign({}, user, pet)

// const userCopy = Object.assign({}, user)
// userCopy.age = 25
// console.log(userCopy);
// console.log(user);

//  ---------------------------------------------------- destrukturyzacja

// const person = {
//     name: 'Lily',
//     age: '23',
//     job: 'DJ',
//     car: {
//         brand: 'Doge',
//         model: 'Viper'
//     }
// }

// const showInfo = ({job, name, age}) => {
//     console.log(`${name} pracuje jako ${job} i mam ${age} lata.`);
// }

// showInfo(person)

// const showInfo2 = ({car: {brand, model}}) => {
//     console.log(`Jej samochód to ${brand} ${model}.`);
// }

// showInfo2(person)

// const showInfo3 = () => {
//     const {car: {brand, model}} = person
//     console.log(`Jej samochód to ${brand} ${model}.`);
// }

// showInfo3()

// ---------------------------------------------------- destrukturyzacja tablic

// const colors = ['red', 'green', 'blue']

// const firstColor = colors[0]
// const secondColor = colors[1]

// const [first, second] = colors

// console.log(firstColor, secondColor);
// console.log(first, second);

// const [,,abcd] = colors
// console.log(abcd);

// fetch, then, catch

// const btn = document.querySelector('button')
// const img = document.querySelector('img')

// const URL = 'https://dog.ceo/api/breeds/image/random'

// // fetch().then().catch()

// btn.addEventListener('click', () => {
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => img.setAttribute('src', data.message))
//         .catch(err => console.error(err))
// })

//  ---------------------------------------------------- promisy

// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//                 setTimeout(() => {
//                     console.log(5);
//                 }, 300)
//             }, 300)
//         }, 300)
//     }, 300)
// }, 300)

// const test = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('jest ok')
//     } else {
//         reject('błąd')
//     }
// })

// test
//     .then(info => console.log(info))
//     .catch(err => console.error(err))

// ---------------------------------------------------- async & await

// const checkAge = age => {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) {
//             resolve()
//         } else {
//             reject('Masz za mało lat!')
//         }
//     })
// }

// const doubleCheck = () => {
//     return new Promise(resolve => {
//         console.log('Spradzam jeszcze raz...')
//         setTimeout(() => {
//             resolve('Faktycznie się zgadza.')
//         }, 1000)
//     })
// }

//  ---------------------------------------------------- pierwsza wersja promis

// checkAge(50)
//     .then(() => {
//         console.log('Chyba możesz wejść.')
//         return doubleCheck()
//     })
//     .then(res => console.log(res))
//     .then(() => {
//         console.log('Weryfikacja zakończona!');
//     })
//     .catch(error => console.error(error))

//  ---------------------------------------------------- werja async

// async function test() {
//     try {
//         await checkAge(22)
//         console.log('Chyba możesz wejść.')
//         await doubleCheck()
//         console.log('Faktycznie, wiek się zgadza')
//         console.log('Weryfikacja zakończona')
//     } catch {
//         console.error('Błąd, masz za mało lat!');
//     }
// }

// test()

// async & await part II

// const URL = 'https://dog.ceo/api/breeds/image/random'

// // funkcja zapisana fetchem

// fetch(URL)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// // funkcja zapisana async&awaitem

// async function test() {
//     try {
//         const res = await fetch(URL)
//         const data = await res.json()
    
//         console.log(data);
//     } catch {
//         console.error('błąd');
//     }
// }

// test()

// axios

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const URL = 'https://dog.ceo/api/breeds/image/random'

fetch(URL)
    .then(res => res.json())
    .then(res => one.setAttribute('src', res.message))

axios.get(URL).then(res => two.setAttribute('src', res.data.message))

async function showImage() {
    const response = await axios.get(URL)
    three.setAttribute('src', response.data.message)
}

showImage()