import { ICategoryRepository } from '../../domain/repositories/category.repository'
import { Category } from '../../domain/entities/Category.entity'

export class CategoryUseCase {
  constructor(private readonly categoryRepository: ICategoryRepository) {}

  async createCategory(name: string): Promise<Category | null> {
    const existingCategory = await this.categoryRepository.findByName(name)

    if (existingCategory) return existingCategory

    return await this.categoryRepository.create({ name })
  }

  async addProductToCategory(id_category: string, id_product: string): Promise<Category> {
    return await this.categoryRepository.addProductToCategory({
      id_category,
      id_product
    })
  }

  async listAllProductsInCategory(id_category: string): Promise<Category[]> {
    return await this.categoryRepository.listAll(id_category)
  }
}
