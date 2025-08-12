import { IUserRepository } from '../../domain/repositories/user.repository'
import { UserExistsError } from '../errors/user.errors'
import { RegisterDTO } from '../interfaces/credentias.interface'

export class RegisterUserUseCase {
  constructor (private readonly userRepository: IUserRepository) {}

  async execute ({ name, email, password }: RegisterDTO) {
    const existingUser = await this.userRepository.findByEmail(email)
    if (existingUser) throw new UserExistsError()

    const user = await this.userRepository.create({
      name, email, password
    })

    return {
      user: {
        name: user.name,
        email: user.email
      }
    }
  }
}
