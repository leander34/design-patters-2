export interface Propotype {
  clone(): Propotype
}

class Person implements Propotype {
  public addresses: Address[] = []
  constructor(public name: string, public age: number) {}
  clone(): Person {
    const newObject = new Person(this.name, this.age)
    newObject.addresses = this.addresses.map((address) => address.clone())
    return newObject
  }

  add(address: Address): void {
    this.addresses.push(address)
  }
}

class Address implements Propotype {
  constructor(public street: string, public number: number) {}
  clone(): Address {
    return new Address(this.street, this.number)
  }
}

const address1 = new Address('Guapore', 127)

const person1 = new Person('leander', 20)
person1.add(address1)
const person2 = person1.clone()

person1.addresses[0].street = 'lkdlamdladjkl'

// console.log(person1)
person2.name = 'Person2'
console.log(person2)
console.log(person2.addresses)

console.log(person1)
console.log(person1.addresses)
