import { Router } from 'express'
import { createOrder, getOrders, shippedOrder, paidOrder, deleteOrder } from '../controllers/order.controller'

export const orderRouter = Router()

orderRouter.post('/create/order/:id_user', createOrder)
orderRouter.get('/orders/:id_user', getOrders)
orderRouter.patch('/update/order/shipped/:id_order', shippedOrder)
orderRouter.patch('/update/order/paid/:id_order', paidOrder)
orderRouter.patch('/update/order/cancelled/:id_order', deleteOrder)
