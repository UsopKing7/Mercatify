export interface IRequest {
  id_user?: string,
  email?: string
}

declare global {
  namespace Express {
    interface Request {
      user: IRequest
    }
  }
}
