import { prisma } from '../../shared/constants/db'
import { Category } from '../../domain/entities/Category.entity'
import { AddProductToCategoryData } from './types/category.type'

export const categoryDatabase = {
  createCategory: async (data: { name: string }): Promise<Category | null> => {
    return await prisma.category.create({
      data: { name: data.name }
    })
  },

  findByName: async (data: { name: string }): Promise<Category | null> => {
    return await prisma.category.findFirst({
      where: { name: data.name }
    })
  },

  addProductToCategory: async (data: AddProductToCategoryData): Promise<Category> => {
    const { id_category, id_product } = data
    return await prisma.category.update({
      where: { id_category },
      data: {
        products: {
          connect: { id_product }
        }
      }
    })
  },

  listAll: async (id_category: string): Promise<Category[]> => {
    return await prisma.category.findMany({
      where: { id_category },
      include: { products: true }
    })
  }
}
