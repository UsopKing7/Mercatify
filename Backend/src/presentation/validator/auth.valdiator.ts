import z from 'zod'

export const loginSchema = z.object({
  email: z
    .string({ message: 'email is required' })
    .email('invalid email format'),
  password: z
    .string({ message: 'password is required' })
    .min(8, 'password must be at least 8 characters long')
})

export const registerSchema = z.object({
  name: z
    .string({ message: 'name is required' })
    .min(1, 'name cannot be empty'),
  email: z
    .string({ message: 'email is required' })
    .email('invalid email format'),
  password: z
    .string({ message: 'password is required' })
    .min(8, 'password must be at least 8 characters long')
})
