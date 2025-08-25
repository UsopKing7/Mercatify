import { OrderError } from '../errors/order.error'

export class Order {
  constructor (
    public readonly id_order: string,
    public readonly id_user: string,
    public readonly total: number
  ) {
    if (!id_order) throw new OrderError('Order ID is required')
    if (!id_user) throw new OrderError('User ID is required')
    if (id_user.length < 36) throw new OrderError('User ID must be at least 36 characters long')
    if (!/^[a-zA-Z0-9-]+$/.test(id_order)) throw new OrderError('Order ID can only contain alphanumeric characters and hyphens')
    if (total === undefined || total === null) throw new OrderError('Total amount is required')
    if (isNaN(total) || total < 0) throw new OrderError('Total must be a non-negative number')
  }
}
