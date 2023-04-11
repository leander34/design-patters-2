import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol'
import { MealBox } from './meal-box'
import { Beans, Beverage, Dessert, Meat, Rice } from './meals'

export class MainDishBuilder implements MealBuilderProtocol {
  private _mealBox: MealBox = new MealBox()

  reset(): this {
    this._mealBox = new MealBox()
    return this
  }
  makeMeal(): this {
    const rice = new Rice('Arroz', 20)
    const beans = new Beans('Feijão', 8)
    const meat = new Meat('Carne', 39)

    this._mealBox.add(rice, beans, meat)
    return this
  }
  makeBeverage(): this {
    const beverage = new Beverage('Cerveja', 12)
    this._mealBox.add(beverage)
    return this
  }
  makeDessert(): this {
    const dessert = new Dessert('Bolo', 4)
    this._mealBox.add(dessert)
    return this
  }

  getMeal(): MealBox {
    return this._mealBox
  }

  getPrice(): number {
    return this._mealBox.getPrice()
  }
}
