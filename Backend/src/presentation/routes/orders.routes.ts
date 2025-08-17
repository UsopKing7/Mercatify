import { Router } from 'express'
import { createOrder, getOrders } from '../controllers/order.controller'

export const orderRouter = Router()

orderRouter.post('/create/order/:id_user', createOrder)
orderRouter.get('/orders/:id_user', getOrders)
