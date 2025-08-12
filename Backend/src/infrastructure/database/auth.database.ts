import { prisma } from '../../shared/constants/db'
import { createUserDTO } from './types/auth.type'
export const authDatabase = {
  findUserByEmail: async (email: string) => {
    return await prisma.user.findUnique({
      where: { email }
    })
  },

  createUser: async (userdata: createUserDTO) => {
    return await prisma.user.create({
      data: {
        name: userdata.name,
        email: userdata.email,
        password: userdata.password
      }
    })
  }
}
