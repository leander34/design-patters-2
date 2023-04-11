import { ECommerceShoppingCart } from './shoppingCart/e-commerce-shopping-cart'
import { NewDiscount } from './shoppingCart/new-discount'

const shoppingCart = new ECommerceShoppingCart()
shoppingCart.discountStrategy = new NewDiscount()
shoppingCart.addProduct({ name: 'Produto 1', price: 50 })
shoppingCart.addProduct({ name: 'Produto 1', price: 50 })
shoppingCart.addProduct({ name: 'Produto 1', price: 50 })
shoppingCart.addProduct({ name: 'Produto 1', price: 50 })
shoppingCart.addProduct({ name: 'Produto 1', price: 50 })
shoppingCart.addProduct({ name: 'Produto 1', price: 50 })

console.log(shoppingCart.getTotal())
console.log(shoppingCart.getTotalWithDiscount())
