export class CartItemError extends Error {
  constructor () {
    super('Invalid to create CartItem')
    this.name = 'CartItemError'
  }
}
