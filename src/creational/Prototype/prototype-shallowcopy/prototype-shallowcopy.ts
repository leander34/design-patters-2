export interface Propotype {
  clone(): Propotype
}

class Person implements Propotype {
  public addresses: Address[] = []
  constructor(public name: string, public age: number) {}
  clone(): this {
    const newObject = Object.create(this)
    return newObject
  }

  add(address: Address): void {
    this.addresses.push(address)
  }
}

class Address {
  constructor(public street: string, public number: number) {}
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
