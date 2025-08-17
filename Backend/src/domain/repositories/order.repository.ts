import { Order } from '../../domain/entities/Order.entity'

export interface IOrderRepository {
  create(orderData: { id_user: string }): Promise<Order | null>
  findOrders(id_user: string): Promise<Order[]>
}
