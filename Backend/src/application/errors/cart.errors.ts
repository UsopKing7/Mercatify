export class CartExistsError extends Error {
  constructor () {
    super('Cart to exists in user')
    this.name = 'CartExistsError'
  }
}
