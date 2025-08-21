import { Request, Response, NextFunction } from 'express'

export const errorMiddleware = (error: any, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = error.statusCode || 400
  const message = error.message || 'An unexpected error occurred'

  return res.status(statusCode).json({ error: message })
}

