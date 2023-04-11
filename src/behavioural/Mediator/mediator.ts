import { Seller } from './seller'
import { SellerProduct } from './seller-product'

export class Mediator {
  private sellers: Seller[] = []

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      seller.setMediator(this)
      this.sellers.push(seller)
    })
  }

  buy(id: string): SellerProduct | void {
    let product
    for (let i = 0; i < this.sellers.length; i++) {
      product = this.sellers[i].sell(id)
      if (product) {
        return console.log('Aqui está o produto', product)
      }
    }
    console.log('Não encontrei nenhum produto com o id', id)
  }

  showProduct(): void {
    this.sellers.forEach((seller) => seller.showProduct())
  }
}
