export class UserCredentialsError extends Error {
  constructor () {
    super('invalid credentials')
    this.name = 'UserCredentialsError'
  }
}
