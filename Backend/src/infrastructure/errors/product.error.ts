export class ProductInvalidError extends Error {
  constructor() {
    super('Data incorrects to Product')
    this.name = 'ProductInvalidError'
  }
}
