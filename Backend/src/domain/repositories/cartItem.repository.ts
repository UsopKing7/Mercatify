import { CartItem } from '../entities/CartItem'

export interface CartItemRepository {
  createCartItem(cartItemData: { id_cart: string, id_product: string, quantity: number }): Promise<CartItem | null>
  // findCartItemsByCartId(id_cart: string): Promise<CartItem[]>
}
