import { Token } from './../../domain/entities/Token.entity'
import { prisma } from '../../shared/constants/db'
import { createTokenDTO } from './types/token.type'

export const tokenDatabase = {
  findByUserId: async (id_user: string): Promise<Token | null> => {
    return await prisma.token.findFirst({
      where: { id_user }
    })
  },

  addToken: async (tokenData: createTokenDTO): Promise<Token | null> => {
    const { id_user, token } = tokenData
    return await prisma.token.create({
      data: { id_user, token }
    })
  }
}
