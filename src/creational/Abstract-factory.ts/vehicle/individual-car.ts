import { Customer } from '../customer/customer'
import { Vehicle } from './vehicle'

export class IndividualCar implements Vehicle {
  constructor(public name: string, public readonly customer: Customer) {}
  pickUp(): void {
    console.log(`${this.name} (INDIVIDUAL) está buscando ${this.customer.name}`)
  }
}
