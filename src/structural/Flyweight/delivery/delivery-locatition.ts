import { DeliveryFlyweight } from './delivery-flyweight'
import { DeliveryLocationData } from './delivery-types'

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}
  delivery(name: string, number: string): void {
    console.log('Entrega para %s', name)
    console.log('Em', this.intrinsicState.city, this.intrinsicState.street)
    console.log('Número: ', number)
    console.log('##############')
  }
}
