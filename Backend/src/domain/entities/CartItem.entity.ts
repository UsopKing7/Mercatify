export class CartItem {
  constructor (
    public readonly id_cart_item: string,
    public readonly id_cart: string,
    public readonly id_product: string,
    public readonly quantity: number
  ) {
    if (!id_cart_item) throw new Error('Cart Item ID is required')
    if (!id_cart) throw new Error('Cart ID is required')
    if (!id_product) throw new Error('Product ID is required')
    if (quantity === undefined || quantity === null) throw new Error('Quantity is required')
    if (!Number.isInteger(quantity) || quantity <= 0) throw new Error('Quantity must be a positive integer')
    if (!/^[a-zA-Z0-9-]+$/.test(id_cart_item)) throw new Error('Cart Item ID can only contain alphanumeric characters and hyphens')
  }
}
