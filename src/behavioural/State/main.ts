import { ShoppingOrder } from './shopping-order/shopping-order'

const order = new ShoppingOrder()
order.approvePayment()
order.waitPayment()
order.rejectPayment()
order.shipOrder()
order.approvePayment()
order.waitPayment()
