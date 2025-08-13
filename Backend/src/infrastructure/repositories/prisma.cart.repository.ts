import { Cart } from '../../domain/entities/Card.entity'
import { ICartRepository } from '../../domain/repositories/cart.repository'
import { cartDatabase } from '../database/cart.database'
import { CartErrorInvalid } from '../errors/cart.error'

export class PrismaCartRepository implements ICartRepository {
  async findByIdUser(id_user: string): Promise<Cart | null> {
    const user = await cartDatabase.findUserById(id_user)

    if (!user) return null

    return new Cart(
      user.id_cart,
      user.id_user
    )
  }

  async create(cartData: { id_user: string; }): Promise<Cart | null> {
    const { id_user } = cartData
    const newCart = await cartDatabase.createCart({
      id_user
    })

    if (!newCart) throw new CartErrorInvalid()

    return new Cart(
      newCart.id_cart,
      newCart.id_cart
    )
  }
}
