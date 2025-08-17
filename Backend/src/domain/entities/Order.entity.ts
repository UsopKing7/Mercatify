export class Order {
  constructor (
    public readonly id_order: string,
    public readonly id_user: string,
    public readonly total: number
  ) {}
}
