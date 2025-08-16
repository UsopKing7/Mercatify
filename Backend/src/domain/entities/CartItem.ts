export class CartItem {
  constructor (
    public readonly id_cart_item: string,
    public readonly id_product: string,
    public readonly quantity: number
  ) {}
}
