import { ICartRepository } from '../../domain/repositories/cart.repository'
import { CartDTOP } from '../dto/cart.dto'

export class CartUserUseCase {
  constructor (private readonly cartRepository: ICartRepository) {}

  async execute({ id_user }: CartDTOP) {
    const cartExiste = await this.cartRepository.findByIdUser(id_user)
    if (cartExiste) return cartExiste

    const newCart = await this.cartRepository.create({
      id_user
    })

    return {
      newCart: {
        id_user: newCart?.id_user
      }
    }
  }
}
