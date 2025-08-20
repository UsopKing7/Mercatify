import { Request, Response, NextFunction } from 'express'
import { RequesHttpError } from '../errors/estate-code.error'
import { PrismaUserRepository } from '../../infrastructure/repositories/prisma-user.repository'
import { UserUseCase } from '../../application/use-cases/user.usecase'

const userRepository = new PrismaUserRepository()
const userUseCase = new UserUseCase(userRepository)

export const accessAdminMiddleware = (allowedRoles: string[]) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const id_user = req.user.id_user
      const user = await userUseCase.findById(id_user as string)

      if (!user) throw new RequesHttpError(404, 'User not found')

      if (!allowedRoles.includes(user.role)) throw new RequesHttpError(403, 'Access denied')
      
      next()
    } catch (error) {
      throw new RequesHttpError(403, 'Access denied')
    }
  }
}