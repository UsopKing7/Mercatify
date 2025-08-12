// class error para manejar errores HTTP 
// 200 - 299: OK
// 300 - 399: Redirección
// 400 - 499: Error del cliente
// 500 - 599: Error del servidor

export class RequesHttpError extends Error {
  public readonly statusCode: number
  public readonly message: string

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    this.message = message
    this.name = 'RequesHttpError'
  }
}
