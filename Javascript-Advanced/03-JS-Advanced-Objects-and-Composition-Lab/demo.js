const myPerson = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 23,
    sayHi() {
        console.log(`${this.firstName} says Hi!`);
    }
}

myPerson.sayHi();