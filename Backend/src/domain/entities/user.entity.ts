import bcryp from 'bcrypt'

export class User {
  constructor (
    public readonly id_user: string,
    public readonly name: string,
    public readonly email: string,
    private password: string
  ) {}

  async comparePassword (inputPasword: string): Promise<boolean> {
    return await bcryp.compare(inputPasword, this.password) 
  }
}
