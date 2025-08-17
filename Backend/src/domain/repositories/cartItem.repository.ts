import { CartItem } from '../entities/CartItem.entity'

export interface CartItemRepository {
  createCartItem(cartItemData: { id_cart: string, id_product: string, quantity: number }): Promise<CartItem | null>
/*   findCartItemsByCartId(id_cart: string): Promise<CartItem[]>
  deleteCartItem(id_cart_item: string): Promise<void>
  updateCartItem(id_cart_item: string, quantity: number): Promise<void> */
}
