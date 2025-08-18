import { Request, Response } from 'express'
import { PrismaOrderRepository } from '../../infrastructure/repositories/prisma-order.repository'
import { OrderUseCase } from '../../application/use-cases/order.usecase'
import { RequesHttpError } from '../errors/estate-code.error'
import { redis } from '../../shared/constants/redis'
import { saveCache, verifyCache } from '../../shared/constants/verify.redis'

const orderRepo = new PrismaOrderRepository()
const orderUseCase = new OrderUseCase(orderRepo)
const key = 'orders'

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { id_user } = req.params

    await Promise.all([
      redis.del(key)
    ])

    const order = await orderUseCase.createOrder(id_user)

    return res.status(201).json(order)

  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { id_user } = req.params

    const cache = await redis.get(key)
    const ordersCache = verifyCache(cache)
    if (ordersCache !== null) return res.status(200).json(ordersCache)

    const orders = await orderUseCase.findOrders(id_user)
    const { expire, value } = saveCache(orders)
    await redis.set(key, value, expire)

    return res.status(200).json(orders)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')   
  }
}

export const shippedOrder = async (req: Request, res: Response) => {
  try {
    const { id_order } = req.params

    const shippedOrder = await orderUseCase.updateStatusShipped(id_order)

    return res.status(200).json(shippedOrder)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id_order } = req.params

    const deleteOrder = await orderUseCase.updateStatusCancelled(id_order)

    return res.status(200).json(deleteOrder)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')   
  }
}

export const paidOrder = async (req: Request, res: Response) => {
  try {
    const { id_order } = req.params

    const paidOrder = await orderUseCase.updateStatusPaid(id_order)

    return res.status(200).json(paidOrder)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}