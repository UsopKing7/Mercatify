import { Router } from 'express'
import { createCartItem } from '../controllers/cartItem.controller'

export const cartItemRouter = Router()

cartItemRouter.post('/create/cartItem/:id_cart/:id_product', createCartItem)
