import { Router } from 'express'
import { createProduct } from '../controllers/product.controller'

export const productRouter = Router()

productRouter.post('/create/product', createProduct)

