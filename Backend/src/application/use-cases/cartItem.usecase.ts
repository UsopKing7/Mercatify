import { CartItemRepository } from '../../domain/repositories/cartItem.repository'
import { createCartItemDTO } from '../dto/cartItem.dto'
import { CartItemNotDatedError } from '../errors/cartItem.errors'
export class CartItemUseCase {
  constructor (private readonly cartItemRepository: CartItemRepository) {}

  async createCartItem({ id_cart, id_product, quantity }: createCartItemDTO) {
    if (!id_cart || !id_product || !quantity) throw new CartItemNotDatedError()

    const cartItem = await this.cartItemRepository.createCartItem({
      id_cart, id_product, quantity
    })

    return {
      newCartItem: {
        cartItem
      }
    }
  }
}
