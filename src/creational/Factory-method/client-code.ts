import { Carfactory } from './factories/car-factory'
import { randomCarAlgorithm } from './main/random-vehicle-algorithm'
import { randomNumbers } from './utils/random-numbers'
const carFactory = new Carfactory()

const customerNames = ['Leander', 'Ana', 'Beatriz', 'Lucas']

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm()
  const name = customerNames[randomNumbers(customerNames.length)]
  const car = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`)
  car.stop()

  //   vehicle.pickUp(name)
  //   vehicle.stop()
  console.log('------------------------')
}
