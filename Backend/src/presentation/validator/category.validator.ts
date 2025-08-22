import z from 'zod'

export const categorySchema = z.object({
  name: z
  .string().min(3, {
    message: 'El nombre debe tener al menos 3 caracteres'
  })
  .max(50, {
    message: 'El nombre no puede tener mas de 50 caracteres'
  })
  .regex(/^[a-zA-Z\s]+$/, {
    message: 'El nombre solo puede contener letras, sin espacios ni caracteres especiales'
  })
})
