import { prisma } from '../../shared/constants/db'
import { createProductDTO } from './types/product.type'

export const ProductDatabase = {
  createProduct: async (productData: createProductDTO) => {
    const { description, name, price, stock } = productData
    return await prisma.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        stock: stock
      }
    })
  }
}
