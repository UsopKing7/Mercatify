import { Router } from 'express'
import { createCartItem } from '../controllers/cartItem.controller'

export const cartItemRouter = Router()

// Route test with jest and supertest
cartItemRouter.post('/create/cartItem/:id_cart/:id_product', createCartItem)
