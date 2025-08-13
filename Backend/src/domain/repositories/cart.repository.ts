import { Cart } from '../entities/Card.entity'

export interface ICartRepository {
  findByIdUser(id_user: string): Promise<Cart | null>
  create(cartData: { id_user: string }): Promise<Cart | null>
}
