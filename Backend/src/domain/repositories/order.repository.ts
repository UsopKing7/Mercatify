import { Order } from '../../domain/entities/Order.entity'

export interface IOrderRepository {
  create(orderData: { id_user: string }): Promise<Order | null>
  findOrders(id_user: string): Promise<Order[]>
  updateStatusShipped(id_order: string): Promise<void>
  updateStatusPaid(id_order: string): Promise<void>
  updateStatusCancelled(id_order: string): Promise<void>
  //deleteOrder(id_order: string): Promise<void>
}
