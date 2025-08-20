import bcryp from 'bcrypt'

export class User {
  constructor (
    public readonly id_user: string,
    public readonly name: string,
    public readonly email: string,
    public readonly role: 'USER' | 'ADMIN',
    private password: string
  ) {}

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
