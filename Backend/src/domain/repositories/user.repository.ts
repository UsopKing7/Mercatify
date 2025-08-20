import { User } from '../../domain/entities/user.entity'

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  create(userData: { name: string, email: string, password: string }): Promise<User>
  findUserById(id_user: string): Promise<User | null>
}
