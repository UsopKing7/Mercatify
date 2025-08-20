import { Request, Response } from 'express'
import { ProductUseCase } from '../../application/use-cases/product.usecase'
import { PrismaProductRepository } from '../../infrastructure/repositories/prisma-product.repository'
import { RequesHttpError } from '../errors/estate-code.error'
import { productSchema } from '../validator/product.validator'
import { redis } from '../../shared/constants/redis'
import { saveCache, verifyCache } from '../../shared/constants/verify.redis'

const productRepo = new PrismaProductRepository()
const productUseCase = new ProductUseCase(productRepo)

export const createProduct = async (req: Request, res: Response) => {
  try {
    const response = productSchema.safeParse(req.body)
    if (!response.success) throw response.error.message

    const { description, name, price, stock } = response.data
    const newProducto = await productUseCase.execute({ name, description, price, stock })

    await Promise.all([
      redis.del('products')
    ])

    return res.status(201).json(newProducto)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const key = 'products'
    const cache = await redis.get(key)

    const productsCache = verifyCache(cache)
    if (productsCache !== null) {
      return res.status(200).json({
        message: 'Products from cache',
        products: productsCache
      })
    }
    const products = await productUseCase.findProducts()
    const { value, expire } = saveCache(products)

    await redis.set(key, value, expire)

    return res.status(200).json(products)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id_product } = req.params
    const deleteProduct = await productUseCase.deleteProduct(id_product)

    return res.status(200).json(deleteProduct.message)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}
