
import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
export const RegisterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(6, { message: 'Name is required' }),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
})
export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Invalid Email address', // Custom required message
  }),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
})