import { PrismaUserRepository } from '../../infrastructure/repositories/prisma-user.repository'

export class UserUseCase {
  constructor(private readonly userRepository: PrismaUserRepository) {}

  async findById(id_user: string) {
    const user = await this.userRepository.findUserById(id_user)

    if (!user) throw new Error('User not found')

    return user
  }
}
