import { Bicyclefactory } from '../factories/bicycle-factory'
import { Carfactory } from '../factories/car-factory'
import { randomNumbers } from '../utils/random-numbers'
import { Vehicle } from '../vehicle/vehicle'

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new Carfactory()
  const bicyclefactory = new Bicyclefactory()
  const car1 = carFactory.getVehicle('Fuscao preto')
  const car2 = carFactory.getVehicle('Palio branco')
  const bicycle = bicyclefactory.getVehicle('Bike')
  const cars = [car1, car2, bicycle]
  return cars[randomNumbers(cars.length)]
}
