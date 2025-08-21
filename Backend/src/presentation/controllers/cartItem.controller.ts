import { Request, Response } from 'express'
import { CartItemUseCase } from '../../application/use-cases/cartItem.usecase'
import { PrismaCartItemRepository } from '../../infrastructure/repositories/prisma-cartItem.repository'
import { RequesHttpError } from '../errors/estate-code.error'
import { cartItemSchema } from '../validator/cartItem.validator'

const cartItemRepo = new PrismaCartItemRepository()
const cartItemUseCase = new CartItemUseCase(cartItemRepo)

export const createCartItem = async (req: Request, res: Response) => {
  try {
    const { id_cart, id_product } = req.params
    const response = cartItemSchema.safeParse(req.body)
    const extraFields = Object.keys(req.body).filter(key => key !== 'quantity')
    if (extraFields.length > 0) throw new RequesHttpError(400, 'Algo salio mal')

    if (!response.success) throw response.error.message

    const { quantity } = response.data

    const newCartItem = await cartItemUseCase.createCartItem({
      id_cart, id_product, quantity
    })

    return res.status(201).json(newCartItem)
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}
