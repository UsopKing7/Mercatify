import bcrypt from 'bcrypt'
import { User } from '../../domain/entities/user.entity'
import { IUserRepository } from '../../domain/repositories/user.repository'
import { SAL } from '../../shared/constants/env'
import { UserCredentialsError } from '../errors/auth.error'
import { authDatabase } from '../database/auth.database'

export class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await authDatabase.findUserByEmail(email)

    if (!user) return null

    return new User(
      user.id_user,
      user.name,
      user.email,
      user.password
    )
  }

  async create(userData: { name: string, email: string, password: string }): Promise<User> {
    const { email, name, password } = userData
    const hashPassword = await bcrypt.hash(password, SAL)

    const user = await authDatabase.createUser({
      name, email, password: hashPassword
    })

    if (!user) throw new UserCredentialsError()

    return new User(
      user.id_user,
      user.name,
      user.email,
      user.password
    )
  }
}
