export class Token {
  public readonly id_token?: string
  constructor (
    public readonly id_user: string,
    public readonly token: string
  ) {}
}
