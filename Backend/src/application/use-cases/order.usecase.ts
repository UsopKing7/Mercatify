import { PrismaOrderRepository } from '../../infrastructure/repositories/prisma-order.repository'

export class OrderUseCase {
  constructor (private readonly orderRepository: PrismaOrderRepository) {}

  async createOrder(id_user: string) {
    const newOrder = await this.orderRepository.create({ id_user })

    return {
      order : {
        newOrder
      }
    }
  }

  async findOrders(id_user: string) {
    const orders = await this.orderRepository.findOrders(id_user)

    return {
      orders
    }
  }
}
