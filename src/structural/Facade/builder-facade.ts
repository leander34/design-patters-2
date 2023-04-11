import { MainDishBuilder } from '../../creational/Builder/classes/main-dish-builder'
import { VeganDishBuilder } from '../../creational/Builder/classes/vegan-dish-builder'

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder()
  private veganDishBuilder = new VeganDishBuilder()

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert()
    console.log(this.mainDishBuilder.getPrice())
    console.log(this.mainDishBuilder.getMeal().getPrice())
    this.mainDishBuilder.reset()
  }

  makeMeal2(): void {
    const meal2 = this.mainDishBuilder.makeBeverage().getMeal()
    console.log(meal2)
  }

  makeMeal3(): void {
    const vegan = this.veganDishBuilder.makeMeal().getMeal()
    console.log(vegan)
  }
}
