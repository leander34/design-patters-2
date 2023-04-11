export abstract class ProductComponent {
  abstract getPrice(): number

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProducLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super()
  }

  getPrice(): number {
    return this.price
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = []

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product))
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product)
    if (productIndex !== -1) {
      this.children.splice(productIndex, 1)
    }
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0)
  }
}

// client-code
const camiseta = new ProducLeaf('Camiseta', 100)
const bicicleta = new ProducLeaf('Bicicleta', 1_000)
const carro = new ProducLeaf('Carro', 70_000)

// teste 1
const productBox = new ProductComposite()
productBox.add(camiseta, bicicleta, carro)
// console.log(productBox)
// console.log(productBox.getPrice())

// teste 2
const tablet = new ProducLeaf('Tablet', 1_200)
const kindle = new ProducLeaf('Kindle', 400)
const productBox2 = new ProductComposite()
productBox2.add(tablet, kindle)

productBox.add(productBox2)

console.log(productBox)
console.log(productBox.getPrice())
