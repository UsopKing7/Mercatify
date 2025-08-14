import z from 'zod'

export const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'El name debe tener como minimo 3 caracteres' })
    .max(30, { message: 'El name debe tener como maximo 30 caracteres' }),
  description: z
    .string()
    .min(10, { message: 'La description tiene que tener como minimo 10 caracteres' })
    .max(150, { message: 'La descripcion debe tener como maximo 150 caracteres' }),
  price: z
    .number({
      message: 'El precio debe ser un numero'
    })
    .positive({
      message: 'El precio debe ser un numero positivo'
    }),
  stock: z
    .number({
      message: 'El monto tiene que ser un numero'
    })
    .positive({
      message: 'El monto tiene que ser un numero positivo'
    })
    .int({
      message: 'El monto tiene que ser un numero entero'
    })
})
