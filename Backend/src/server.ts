import express, { Application } from 'express'
import { authRouter } from './presentation/routes/auth.routes'
import { productRouter } from './presentation/routes/product.routes'
import { cartItemRouter } from './presentation/routes/cartItem.routes'
import { orderRouter } from './presentation/routes/orders.routes'
import { categoryRouter } from './presentation/routes/category.routes'
import cookieParser from 'cookie-parser'

export const app: Application = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.use('/api', authRouter)
app.use('/api', productRouter)
app.use('/api', cartItemRouter)
app.use('/api', orderRouter)
app.use('/api', categoryRouter)
