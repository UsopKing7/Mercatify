import { IOrderRepository } from '../../domain/repositories/order.repository'
import { Order } from '../../domain/entities/Order.entity'
import { orderDatabase } from '../database/orde.database'

export class PrismaOrderRepository implements IOrderRepository {
  async create(orderData: { id_user: string }): Promise<Order | null> {
    const { id_user } = orderData

    const order = await orderDatabase.createOrder({ id_user })

    if (!order) return null

    return new Order(
      order.id_order,
      order.id_user,
      order.total
    )
  }
  async findOrders(id_user: string): Promise<Order[]> {
    const orders = await orderDatabase.findOrders(id_user)

    if (!orders) throw new Error('Orders not found')

    return orders.map((order: Order) => new Order(
      order.id_order,
      order.id_user,
      order.total
    ))
  }

  async updateStatusShipped(id_order: string): Promise<void> {
    const SHIPPED = await orderDatabase.updateStatusShipped(id_order)
    if (!SHIPPED) return

    return
  }

  async updateStatusPaid(id_order: string): Promise<void> {
    const PAID = await orderDatabase.updateStatusPaid(id_order)
    if (!PAID) return

    return
  }

  async updateStatusCancelled(id_order: string): Promise<void> {
    const CANCELED = await orderDatabase.updateStatusCancelled(id_order)
    if (!CANCELED) return
    
  }
}
