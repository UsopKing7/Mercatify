export class ProductInvalidError extends Error {
  constructor() {
    super('Data incorrects to Product')
    this.name = 'ProductInvalidError'
  }
}

export class ProductsNotFoundError extends Error {
  constructor () {
    super('Products not found')
    this.name = 'ProductsNotFoundError'
  }
}