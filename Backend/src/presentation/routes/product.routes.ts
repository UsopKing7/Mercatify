import { Router } from 'express'
import { createProduct, getProducts } from '../controllers/product.controller'

export const productRouter = Router()

productRouter.post('/create/product', createProduct)
productRouter.get('/products', getProducts)
