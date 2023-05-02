import { AlcoholicDrink } from './alcoholic-drink'
import { Cigarette } from './cigarette'
import { Food } from './food'
import { BrazilTaxVisitor } from './brazil-tax-visitor'
import { UsTaxVisitor } from './us-tax-visitor'

const food = new Food(10)
const cigarette = new Cigarette(5)
const alcoholicDrink = new AlcoholicDrink(5)

const cart = [food, cigarette, alcoholicDrink]
const brazilTaxVisitor = new BrazilTaxVisitor()
const usTaxVisitor = new UsTaxVisitor()

const total = cart.reduce((sum, item) => sum + item.getPrice(), 0)
const totalWithtaxesBrazil = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(brazilTaxVisitor),
  0
)
const totalWithtaxesUs = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(usTaxVisitor),
  0
)
console.log(total)
console.log(totalWithtaxesBrazil)
console.log(totalWithtaxesUs)
