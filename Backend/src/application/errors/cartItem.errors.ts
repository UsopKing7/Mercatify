export class CartItemNotDatedError extends Error {
  constructor () {
    super('CartItem not dated')
    this.name = 'CartItemNotDatedError'
  } 
}
