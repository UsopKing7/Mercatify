import { prisma } from '../../shared/constants/db'
import { OrderCreateDTO } from './types/orde.type'

export const orderDatabase = {
  createOrder: async (dataOrder: OrderCreateDTO) => {
    const { id_user } = dataOrder

    const cart: any = await prisma.cart.findUnique({
      where: { id_user },
      include: { items: { include: { product: true } } }
    })

    const totalsuma = cart.items.reduce(
     (sum: number, item: any) => sum + item.quantity * item.product.price, 0 )
    
    return await prisma.order.create({
      data: {
        id_user,
        status: 'PENDING',
        total: totalsuma,
        items: {
          create: cart.items.map((item: any) => ({
            id_product: item.id_product,
            quantity: item.quantity,
            unit_price: item.product.price
          }))
        }
      }
    })
  },

  findOrders: async (id_user: string) => {
    return await prisma.order.findMany({
      where: { id_user },
      include: { items: { include: { product: true } } }
    })
  },

  updateStatusShipped: async (id_order: string) => {
    return await prisma.order.update({
      where: { id_order },
      data: {
        status: 'SHIPPED'
      }
    })
  },

  updateStatusPaid: async (id_order: string) => {
    return await prisma.order.update({
      where: { id_order },
      data: {
        status: 'PAID'
      }
    })
  },

  updateStatusCancelled: async (id_order: string) => {
    return await prisma.order.update({
      where: { id_order },
      data: {
        status: 'CANCELED'
      }
    })
  }
}
