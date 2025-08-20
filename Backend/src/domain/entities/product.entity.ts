import { ProductError } from "../errors/product.error";

export class Product {
  constructor (
    public readonly id_product: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly stock: number
  ) {
    if (!id_product) throw new ProductError('Product ID is required')
    if (!/^[a-zA-Z0-9-]+$/.test(id_product)) throw new ProductError('Product ID can only contain alphanumeric characters and hyphens')
    if (!name) throw new ProductError('Product name is required')
    if (name.trim() === '') throw new ProductError('Product name cannot be empty')
    if (!description) throw new ProductError('Product description is required')
    if (description.trim() === '') throw new ProductError('Product description cannot be empty')
    if (price === undefined || price === null) throw new ProductError('Product price is required')
    if (isNaN(price) || price < 0) throw new ProductError('Product price must be a non-negative number')
    if (stock == undefined || stock == null) throw new ProductError('Product stock is required')
    if (!Number.isInteger(stock) || stock < 0) throw new ProductError('Product stock must be a non-negative integer')
  }
}
