import { PrismaUserRepository } from '../../infrastructure/repositories/prisma-user.repository'
import { UserUseCase } from '../../application/use-cases/user.usecase'
import { RequesHttpError } from '../errors/estate-code.error'
import { Request, Response } from 'express'

const userRepository = new PrismaUserRepository()
const userUseCase = new UserUseCase(userRepository)

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id_user } = req.params

    const user = await userUseCase.findById(id_user)

    return res.status(200).json(user.toJSON())
  } catch (error) {
    throw new RequesHttpError(400, 'Algo salio mal')
  }
}
