import { ProductCustomizationDecorator } from './product/product-customization-decorador'
import { ProductDecorator } from './product/product-decorator'
import { ProductStampDecorator } from './product/product-stamp-decorator'
import { TShirt } from './product/t-shirt'

const tShirt = new TShirt()
const decoratedStampedTShirt = new ProductStampDecorator(tShirt)
const decoratedStampedTShirtFrontAndBack = new ProductStampDecorator(
  decoratedStampedTShirt
)

const customizedTShirt = new ProductCustomizationDecorator(tShirt)
console.log(tShirt.getName())
console.log(tShirt.getPrice())

console.log(decoratedStampedTShirt.getName())
console.log(decoratedStampedTShirt.getPrice())

console.log(decoratedStampedTShirtFrontAndBack.getName())
console.log(decoratedStampedTShirtFrontAndBack.getPrice())

console.log(customizedTShirt.getName())
console.log(customizedTShirt.getPrice())
