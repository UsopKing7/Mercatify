import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import { errorFormat } from '../../shared/utils/format-error.utils'
import { SECRET_KEY } from '../../shared/constants/env'
import { IRequest } from './request'

export const protectedMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token

  if (!token) {
    res.status(401).json({
      message: 'Access denied. No token provided,'
    })
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY as string)
    req.user = decoded as IRequest

    next()
  } catch (error) {
    res.status(400).json({
      message: 'Invalid token',
      error: errorFormat(error)
    })
  }
}
