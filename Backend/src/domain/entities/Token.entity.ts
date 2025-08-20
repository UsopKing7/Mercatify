import { TokenError } from '../errors/Token.error'

export class Token {
  public readonly id_token?: string
  constructor (
    public readonly id_user: string,
    public readonly token: string
  ) {
    if (!id_user) throw new TokenError('User ID is required')
    if (!token) throw new TokenError('Token is required')
    if (!/^[a-zA-Z0-9-]+$/.test(id_user)) throw new TokenError('User ID can only contain alphanumeric characters and hyphens')
    if (token.trim() === '') throw new TokenError('Token cannot be empty')
    if (id_user.length < 36) throw new TokenError('User ID must be at least 36 characters long')
    if (token.length < 16) throw new TokenError('Token must be at least 16 characters long')
  }
}
