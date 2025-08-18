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

  async updateStatusShipped(id_order: string) {
    const SHIPPED = await this.orderRepository.updateStatusShipped(id_order)
    return {
      SHIPPED
    }
  }

  async updateStatusPaid(id_order: string) {
    const PAID = await this.orderRepository.updateStatusPaid(id_order)
    return {
      PAID
    }
  }

  async updateStatusCancelled(id_order: string) {
    const CANCELED = await this.orderRepository.updateStatusCancelled(id_order)
    return {
      CANCELED
    }
  }
}
