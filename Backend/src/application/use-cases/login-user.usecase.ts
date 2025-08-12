import { IUserRepository } from '../../domain/repositories/user.repository'
import { UserCredentialsError } from '../errors/user.errors'
import { generateToken } from '../../infrastructure/auth/token.auth'
import { LoginDTO } from '../interfaces/credentias.interface'

export class LoginUserUseCase {
  constructor (private readonly userRepository: IUserRepository) {}
  
  async execute ({ email, password }: LoginDTO) {
    const user = await this.userRepository.findByEmail(email)
    if(!user) throw new UserCredentialsError()

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) throw new UserCredentialsError()

    generateToken({ id_user: user.id_user as string, email: user.email })

    return { user: {
      id_user: user.id_user,
      name: user.name,
      email: user.email
    }}
  }
}
