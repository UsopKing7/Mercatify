export class Cart {
  constructor(
    public readonly id_cart: string,
    public readonly id_user: string
  )
  {
    if (!id_cart) throw new Error('Cart ID is required')
    if (!id_user) throw new Error('User ID is required')
    if (!/^[a-zA-Z0-9-]+$/.test(id_cart)) throw new Error('Cart ID can only contain alphanumeric characters and hyphens')
    if (!/^[a-zA-Z0-9-]+$/.test(id_user)) throw new Error('User ID can only contain alphanumeric characters and hyphens')
  }
}
