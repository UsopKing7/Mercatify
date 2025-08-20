import { Router } from 'express'
import { login, register } from '../controllers/auth.controller'
import { getUserById } from '../controllers/user.controller'
import { accessAdminMiddleware } from '../middlewares/acces-admin.middleware'

export const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/register', register)
authRouter.get('/users/:id_user', accessAdminMiddleware(['ADMIN']), getUserById)
