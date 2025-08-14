import express, { Application } from 'express'
import { authRouter } from './presentation/routes/auth.routes'
import cookieParser from 'cookie-parser'
import { productRouter } from './presentation/routes/product.routes'

export const app: Application = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use('/api', authRouter)
app.use('/api', productRouter)
