import { CartItemRepository } from '../../domain/repositories/cartItem.repository'
import { CartItem } from '../../domain/entities/CartItem.entity'
import { cartItemDatabase } from '../database/cartItem.database'
import { ProductDatabase} from '../database/product.database'
import { CartItemError } from '../errors/cartItem.error'
import { ProductNotExistsError, InsufficientStockError } from '../errors/product.error'

export class PrismaCartItemRepository implements CartItemRepository {
  async createCartItem(cartItemData: { id_cart: string, id_product: string, quantity: number }): Promise<CartItem | null> {
    const { id_cart, id_product, quantity } = cartItemData

    
    const product = await ProductDatabase.findProductById(id_product)
    if (!product) throw new ProductNotExistsError()
      
    if (quantity > product.stock) throw new InsufficientStockError()
        
    const newCartItem = await cartItemDatabase.createCartItem({
      id_cart, id_product, quantity
    })

    if(!newCartItem) throw new CartItemError()

    return new CartItem(
      newCartItem.id_cart_item,
      newCartItem.id_cart,
      newCartItem.id_product,
      newCartItem.quantity
    )
  }
}
