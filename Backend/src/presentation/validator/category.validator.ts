import z from 'zod'

export const categorySchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres')
})
