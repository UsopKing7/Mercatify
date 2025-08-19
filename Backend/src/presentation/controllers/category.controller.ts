import { PrismaCategoryRepository } from '../../infrastructure/repositories/prisma-ctegory.repository'
import { CategoryUseCase } from '../../application/use-cases/category.usecase'
import { Request, Response } from 'express'
import { RequesHttpError } from '../errors/estate-code.error'
import { categorySchema } from '../validator/category.validator'

const categoryRepo = new PrismaCategoryRepository()
const categoryUseCase = new CategoryUseCase(categoryRepo)

export const createCategory = async (req: Request, res: Response) => {
  try {
    const response = categorySchema.safeParse(req.body)

    if (!response.success) throw response.error.message

    const { name } = response.data
    const category = await categoryUseCase.createCategory(name)

    return res.status(201).json(category)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}

export const addProductToCategory = async (req: Request, res: Response) => {
  try {
    const { id_category, id_product } = req.params
    if (!id_category || !id_product) throw new RequesHttpError(400, 'Category ID and Product ID are required')

    const addedCategory = await categoryUseCase.addProductToCategory(id_category, id_product)
    if (!addedCategory) throw new RequesHttpError(404, 'Category not found or product not added')
    
    return res.status(201).json(addedCategory)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}

export const listAllProductsInCategory = async (req: Request, res: Response) => {
  try {
    const { id_category } = req.params
    if (!id_category) throw new RequesHttpError(400, 'Category ID is required')

    const productsInCategoty = await categoryUseCase.listAllProductsInCategory(id_category)
    if (!productsInCategoty) throw new RequesHttpError(404, 'Category not found or no products in this category')

    return res.status(200).json(productsInCategoty)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}
