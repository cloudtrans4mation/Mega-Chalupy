import { z } from 'zod'

// Existing schemas
export const PasswordSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' })
  .max(50, { message: 'Password must be less than 50 characters' })
  .trim()

export const EmailSchema = z
  .string()
  .min(6, { message: 'Email is required' })
  .max(50, { message: 'Email must be less than 50 characters' })
  .email({ message: 'Not a valid email' })
  .trim()
  .toLowerCase()

export const NameSchema = z
  .string()
  .trim()
  .min(3, { message: 'Name must be at least 3 characters long' })

// New client type schema
export const ClientTypeSchema = z.enum(['owner', 'client'], {
  errorMap: () => ({ message: 'Client type must be either "owner" or "client"' }),
})

// Login schema
export const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
})

// Register schema with new client type
export const RegisterSchema = LoginSchema.extend({
  name: NameSchema,
  confirmPassword: PasswordSchema,
  clientType: ClientTypeSchema, // New field added here
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

// Register user schema
export const RegisterUserSchema = LoginSchema.extend({
  name: NameSchema,
  clientType: ClientTypeSchema, // New field added here
})

// Passwords schema for matching passwords
export const PasswordsSchema = z
  .object({
    password: PasswordSchema,
    confirmPassword: PasswordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
