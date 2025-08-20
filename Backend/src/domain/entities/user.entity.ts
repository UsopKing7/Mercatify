import bcryp from 'bcrypt'
import { UserError } from '../errors/user.error'

export class User {
  constructor (
    public readonly id_user: string,
    public readonly name: string,
    public readonly email: string,
    public readonly role: 'USER' | 'ADMIN',
    private password: string
  ) {
    if (!id_user) throw new UserError('User ID is required')
    if (!name) throw new UserError('Name is required')
    if (!email) throw new UserError('Email is required')
    if (!role || (role !== 'USER' && role !== 'ADMIN')) throw new UserError('Role must be either USER or ADMIN')
    if (!password || password.length < 8) throw new UserError('Password must be at least 8 characters long')
    if (!/^[a-zA-Z0-9-]+$/.test(id_user)) throw new UserError('User ID can only contain alphanumeric characters and hyphens')
    if (email.trim() === '') throw new UserError('Email cannot be empty')
    if (email.includes('@') === false) throw new UserError('Email must contain "@" symbol')
    if (name.trim() === '') throw new UserError('Name cannot be empty')
  }

  async comparePassword (inputPasword: string): Promise<boolean> {
    return await bcryp.compare(inputPasword, this.password) 
  }

  toJSON () {
    return {
      id_user: this.id_user,
      name: this.name,
      email: this.email,
      role: this.role
    }
  }
}
