import { Product } from '../../domain/entities/product.entity'
import { IProductRepository } from '../../domain/repositories/product.repository'
import { ProductDatabase } from '../database/product.database'
import { createProductDTO } from '../database/types/product.type'
import { ProductInvalidError, ProductsNotFoundError } from '../errors/product.error'

export class PrismaProductRepository implements IProductRepository {
  async createProduct(productDat: createProductDTO): Promise<Product | null> {
    const { description, name, price, stock } = productDat

    const newProducto = await  ProductDatabase.createProduct({
      name, description, price, stock
    })

    if (!newProducto) throw new ProductInvalidError()

    return new Product(
      newProducto.id_product,
      newProducto.name,
      newProducto.description,
      newProducto.price,
      newProducto.stock
    )
  }

  async findProducts(): Promise<Product[]> {
    const products = await ProductDatabase.findProducts()

    if (!products || products.length === 0) throw new ProductsNotFoundError()

    return products.map((product: Product) => new Product (
      product.id_product,
      product.name,
      product.description,
      product.price,
      product.stock
    ))
  }
}
