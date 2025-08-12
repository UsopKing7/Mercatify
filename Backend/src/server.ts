import express from 'express'
import { authRouter } from './presentation/routes/auth.routes'
import cookieParser from 'cookie-parser'

export const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use('/api', authRouter)
