export class ProductsNotFoundError extends Error {
  constructor () {
    super('Products not found')
    this.name = 'ProductsNotFoundError'
  }
}
