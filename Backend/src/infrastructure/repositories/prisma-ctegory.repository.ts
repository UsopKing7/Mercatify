import { categoryDatabase } from '../database/category.database'
import { ICategoryRepository } from '../../domain/repositories/category.repository'
import { Category } from '../../domain/entities/Category.entity'
import { CategoryError } from '../errors/Category'

export class PrismaCategoryRepository implements ICategoryRepository {
  async create(category: { name: string }): Promise<Category | null> {
    const { name } = category
    const nameUnique = name.toUpperCase()
    const existingCategory = await categoryDatabase.findByName({
      name: nameUnique
    })

    if (existingCategory) return existingCategory

    const createdCategory = await categoryDatabase.createCategory({
      name: nameUnique
    })

    if (!createdCategory) throw new CategoryError('Category creation failed')

    return new Category(
      createdCategory.id_category,
      createdCategory.name
    )
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await categoryDatabase.findByName({ name })

    if (!category) return null

    return new Category(
      category.id_category,
      category.name
    )
  }

  async addProductToCategory(data: { id_category: string; id_product: string; }): Promise<Category> {
    return await categoryDatabase.addProductToCategory({
      id_category: data.id_category,
      id_product: data.id_product
    })
  }

  async listAll(id_category: string): Promise<Category[]> {
    const ProductsCategory = await categoryDatabase.listAll(id_category)

    if (!ProductsCategory) throw new CategoryError('No products found in this category')

    return ProductsCategory
  }
}
