import { MainDishBuilder } from './classes/main-dish-builder'
import { VeganDishBuilder } from './classes/vegan-dish-builder'

const mainDishBuilder = new MainDishBuilder()

mainDishBuilder.makeMeal().makeDessert()
console.log(mainDishBuilder.getPrice())
console.log(mainDishBuilder.getMeal().getPrice())
mainDishBuilder.reset()
const meal2 = mainDishBuilder.makeBeverage().getMeal()
console.log(meal2)

const veganDishBuilder = new VeganDishBuilder()
const vegan = veganDishBuilder.makeMeal().getMeal()
console.log(vegan)
