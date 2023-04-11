import { Buyer } from './buyer'
import { Mediator } from './mediator'
import { Seller } from './seller'

const mediator = new Mediator()
const seller1 = new Seller()
const seller2 = new Seller()

seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.9 })
seller1.addProduct({ id: '2', name: 'Calça', price: 149.9 })

seller2.addProduct({ id: '3', name: 'Carro', price: 52_001.9 })
seller2.addProduct({ id: '4', name: 'Notebook', price: 2459.9 })

mediator.addSeller(seller1, seller2)
// mediator.showProduct()

const buyer = new Buyer(mediator)
buyer.viewProducts()
buyer.buy('1')
buyer.buy('3')
buyer.viewProducts()
