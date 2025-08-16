import { Product } from '../entities/product.entity'

export interface IProductRepository {
  createProduct(productDat: { 
    name: string, description: string, price: number, stock: number 
  }): Promise<Product | null>
  findProducts(): Promise<Product[]>
  deleteProduct(id_product: string): Promise<void>
}
