import { addProductToCategory, createCategory, listAllProductsInCategory } from '../controllers/category.controller'
import { Router } from 'express'

export const categoryRouter = Router()

// Routes tested with jest and supertest
categoryRouter.post('/create/category', createCategory)
categoryRouter.post('/add/product/category/:id_category/:id_product', addProductToCategory)
categoryRouter.get('/list/products/category/:id_category', listAllProductsInCategory)
