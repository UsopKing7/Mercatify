export class UserCredentialsError extends Error {
  constructor () {
    super('invalid credentials')
    this.name = 'UserCredentialsError'
  }
}

export class UserExistsError extends Error {
  constructor () {
    super('user already exists')
    this.name = 'UserExistsError'
  }
}
