import { PrismaUserRepository } from '../../infrastructure/repositories/prisma-user.repository'
import { LoginUserUseCase } from '../../application/use-cases/login-user.usecase'
import { loginSchema, registerSchema } from '../validator/auth.valdiator'
import { Request, Response } from 'express'
import { errorFormat } from '../../shared/utils/format-error.utils'
import { RegisterUserUseCase } from '../../application/use-cases/register-user.usecase'
import { generateToken } from '../../infrastructure/auth/token.auth'
import { RequesHttpError } from '../errors/estate-code.error'

const userRepo = new PrismaUserRepository()
const loginUserUseCase = new LoginUserUseCase(userRepo)

export const login = async (req: Request, res: Response) => {
  try {
    const response = loginSchema.safeParse(req.body)
  
    if(!response.success) throw errorFormat(response.error.message)
  
    const { email, password } = response.data
    const result = await loginUserUseCase.execute({ email, password })
    const token = generateToken({ id_user: result.user.id_user as string, email: result.user.email })

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // => 7 days
    })
  
    return res.status(200).json(result)
    
  } catch (error) {
    throw new RequesHttpError(400, 'algo salio mal')
  }
}

const userRepoRegister = new PrismaUserRepository()
const registerUserUseCase = new RegisterUserUseCase(userRepoRegister)

export const register = async (req: Request, res: Response) => {
  try {
    const response = registerSchema.safeParse(req.body)
    if (!response.success) throw response.error.message

    const { name, email, password } = response.data
    const result = await registerUserUseCase.execute({ name, email, password })

    return res.status(201).json(result)
  } catch (error) {
    throw new RequesHttpError(400, 'algo salio mal')
  }
}
