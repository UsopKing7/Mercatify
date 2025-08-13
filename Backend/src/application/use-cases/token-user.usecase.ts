import { ITokenRepository } from '../../domain/repositories/token.repository'
// import { TokenExistsError } from '../errors/token.errors'
import { TokenDTO } from '../dto/token.intercafe'

export class TokenUserUseCase {
  constructor (private readonly tokenRepository: ITokenRepository) {}

  async execute ({ id_user, token }: TokenDTO) {
    const tokenExiste = await this.tokenRepository.findByUserId(id_user)

    if (tokenExiste) return tokenExiste

    const newToken = await this.tokenRepository.create({
      id_user, token
    })

    return {
      newToken: {
        id_user: newToken?.id_user,
        token: newToken?.token
      }
    }
  }
}