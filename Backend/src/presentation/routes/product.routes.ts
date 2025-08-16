import { Router } from 'express'
import { createProduct, getProducts, deleteProduct } from '../controllers/product.controller'

export const productRouter = Router()

productRouter.post('/create/product', createProduct)
productRouter.get('/products', getProducts)
productRouter.delete('/delete/product/:id_product', deleteProduct)
