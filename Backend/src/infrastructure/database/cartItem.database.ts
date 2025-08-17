import { prisma } from '../../shared/constants/db'
import { createCartItemDTO } from './types/cartItem'

export const cartItemDatabase = {
  createCartItem: async (cartItemData: createCartItemDTO) => {
    const { id_cart, id_product, quantity } = cartItemData
    return prisma.cartItem.upsert({
      where: {
        id_cart_id_product: {
          id_cart,
          id_product
        }
      },
      update: {
        quantity: { increment: quantity }
      },
      create: {
        id_cart,
        id_product,
        quantity
      }
    })
  }
}
