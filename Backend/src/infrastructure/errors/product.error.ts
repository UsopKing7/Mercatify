export class ProductInvalidError extends Error {
  constructor() {
    super('Data incorrects to Product')
    this.name = 'ProductInvalidError'
  }
}

export class ProductsNotFoundError extends Error {
  constructor () {
    super('Products not found')
    this.name = 'ProductsNotFoundError'
  }
}

export class ProductNotExistsError extends Error {
  constructor() {
    super('Product not exists')
    this.name = 'ProductNotExistsError'
  }
}

export class InsufficientStockError extends Error {
  constructor() {
    super('La cantidad solicitada es mayor al stock disponible')
    this.name = 'InsufficientStockError'
  }
}
