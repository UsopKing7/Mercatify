export class CartErrorInvalid extends Error{
  constructor() {
    super('Invalid to create Cart')
    this.name = 'CartErrorInvalid'
  }
}
