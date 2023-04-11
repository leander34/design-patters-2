import { MydataStructure } from './my-data-structure'
import { MyReverseIterator } from './my-reverve-iterator'

const dataStructure = new MydataStructure()
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F')
console.log(dataStructure)

const [a, b] = dataStructure
console.log('Roubados: ', a, b)
console.log('Executei varias coisas e depois usei o iterator')
const [c, ...rest] = dataStructure
console.log(c, rest)

dataStructure.resetIterator()

for (const data of dataStructure) {
  console.log(data)
}

console.log('------------')
dataStructure.changeIterator(new MyReverseIterator(dataStructure))

for (const data of dataStructure) {
  console.log(data)
}

console.log()
