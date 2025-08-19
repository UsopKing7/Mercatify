import { Category } from '../entities/Category.entity'

export interface ICategoryRepository {
  create(category: { name: string }): Promise<Category | null>
  findByName(name: string): Promise<Category | null>
  addProductToCategory(data: { id_category: string, id_product: string }): Promise<Category>
  listAll(id_category: string): Promise<Category[]>
}
