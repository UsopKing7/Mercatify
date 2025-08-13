import { Token } from '../../domain/entities/Token.entity'
import { ITokenRepository } from '../../domain/repositories/token.repository'
import { tokenDatabase } from '../database/token.database'
import { TokenError } from '../errors/token.error'

export class PrismaTokenRepository implements ITokenRepository {
  async findByUserId(id_user: string): Promise<Token | null> {
    const token = await tokenDatabase.findByUserId(id_user)

    if (!token) return null

    return new Token(
      token.id_user,
      token.token
    )
  }

  async create(tokenData: { id_user: string; token: string; }): Promise<Token> {
    const { id_user, token } = tokenData
    const addToken = await tokenDatabase.addToken({ id_user, token })

    if (!addToken) throw new TokenError('Error creating token')

    return new Token(
      addToken.id_user,
      addToken.token
    )
  } 
}
