import { prisma } from '../../shared/constants/db'
import { createCartDTO } from './types/card.types'

export const cartDatabase = {
  findUserById: async (id_user: string) => {
    return await prisma.cart.findUnique({
      where: { id_user }
    })
  },

  createCart: async (dataCart: createCartDTO) => {
    return await prisma.cart.create({
      data: {
        id_user: dataCart.id_user
      }
    })
  }
}
