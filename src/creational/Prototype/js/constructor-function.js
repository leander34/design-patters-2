
function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}
const personPrototype = {
    firstName: 'leander',
    lastName: 'silveira222',
    age: 20,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    },
}
Person.prototype = Object.create(personPrototype)
Person.prototype.constructor = Person

// herança
function SubPerson(firstName, lastName, age) {
    // chamei a função Person passo meu this(contexto) como sendo minha função SubPerson
    // Isso fez com que a função Person criasse as propriedades usando o this da SubPerson
    Person.call(this, firstName, lastName, age)
    this.fromSubClass = 'subclass'
}

SubPerson.prototype = Object.create(Person.prototype)
SubPerson.prototype.constructor = SubPerson


// const person = new Person('leander', 'silveira', 20)
// console.log(person)
// console.log(person.fullName())

const person2 = new SubPerson('Helena', 'Vieira', 20)
console.log(person2)
console.log(person2.fullName())