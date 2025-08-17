import z from 'zod'

export const cartItemSchema = z.object({
  quantity: z
    .number({
      message: 'La cantidad debe ser un numero'
    })
    .int({
      message: 'La cantidad debe ser un numero entero'
    })
    .min(1, {
      message: 'La cantidad debe ser mayor o igual a 1'
    })
    .positive({
      message: 'La cantidad debe ser un numero positivo'
    })
})
