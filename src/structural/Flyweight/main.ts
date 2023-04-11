import { deliveryContext } from './delivery/delivery-context'
import { DeliveryFactory } from './delivery/delivery-factory'

const factory = new DeliveryFactory()

deliveryContext(factory, 'Leander', '127', 'Guaporé', 'Passos')
deliveryContext(factory, 'Helena', '127', 'Guaporé', 'Passos')
deliveryContext(factory, 'Joao', '25', 'Guaporé', 'Passos')
deliveryContext(factory, 'Rafael', '25', 'Pará de Santos', 'Passos')
deliveryContext(factory, 'Rafael', '25', 'Pará de Santos', 'Passos')
deliveryContext(factory, 'Rafael', '25', 'Pará de Santos', 'Passos')
deliveryContext(factory, 'Rafael', '25', 'Pará de Santos', 'dpapda')

console.log(factory.getLocations())
