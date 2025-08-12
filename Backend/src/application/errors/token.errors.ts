export class TokenExistsError extends Error {
  constructor() {
    super('Token already exists')
    this.name = 'TokenExistsError'
  }
}
