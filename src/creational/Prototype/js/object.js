const personPrototype = {
  firstName: 'leander',
  lastName: 'silveira',
  age: 20,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

const anotherPerson = Object.create(personPrototype)
anotherPerson.firstName = 'Joana'
console.log(anotherPerson)
console.log(anotherPerson.firstName)
console.log(anotherPerson.age)
console.log(personPrototype === Object.getPrototypeOf(anotherPerson))
