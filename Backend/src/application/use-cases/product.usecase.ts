import { IProductRepository } from '../../domain/repositories/product.repository'
import { ProductDTO } from '../dto/Products.dto'

export class ProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute({ description, name, price, stock, id_product }: ProductDTO) {
    const newProducto = await this.productRepository.createProduct({
      name, description, price, stock
    })

    return {
      newProducto: {
        id_product,
        name: newProducto?.name,
        description: newProducto?.description,
        price: newProducto?.price,
        stock: newProducto?.stock
      }
    }
  }

  async findProducts() {
    const products = await this.productRepository.findProducts()

    return {
      products: {
        products
      }
    }
  }
}
