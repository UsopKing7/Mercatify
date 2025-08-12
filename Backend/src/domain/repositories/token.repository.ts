import { Token } from "../entities/Token.entity"

export interface ITokenRepository {
  findByUserId(id_user: string): Promise<Token | null>
  create(tokenData: { id_user: string, token: string }): Promise<Token | null>
}
