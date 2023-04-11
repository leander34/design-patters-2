import { Customer } from '../customer/customer'
import { Vehicle } from './vehicle'

export class EnterpriseCar implements Vehicle {
  constructor(public name: string, public readonly customer: Customer) {}
  pickUp(): void {
    console.log(`${this.name} (ENTERPRISE) está buscando ${this.customer.name}`)
  }
}
