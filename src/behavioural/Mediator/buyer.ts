import { Mediator } from './mediator'

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProducts(): void {
    this.mediator.showProduct()
  }

  buy(id: string): void {
    this.mediator.buy(id)
  }
}
