import { Request, Response } from 'express'
import { ProductUseCase } from '../../application/use-cases/product.usecase'
import { PrismaProductRepository } from '../../infrastructure/repositories/prisma-product.repository'
import { RequesHttpError } from '../errors/estate-code.error'
import { productSchema } from '../validator/product.validator'

const productRepo = new PrismaProductRepository()
const productUseCase = new ProductUseCase(productRepo)

export const createProduct = async (req: Request, res: Response) => {
  try {
    const response = productSchema.safeParse(req.body)
    if (!response.success) throw response.error.message

    const { description, name, price, stock } = response.data
    const newProducto = await productUseCase.execute({ name, description, price, stock })

    return res.status(201).json(newProducto)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}
