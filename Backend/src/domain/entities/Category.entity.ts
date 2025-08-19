import { CategoryError } from '../errors/category.error'

export class Category {
  constructor(
    public readonly id_category: string,
    public readonly name: string,
  ) {
    if (!id_category || typeof id_category !== 'string') throw new CategoryError('Invalid category ID')
    if (!name || typeof name !== 'string') throw new CategoryError('Invalid category name')
    if (name.length < 3 || name.length > 50) throw new CategoryError('Category name must be between 3 and 50 characters')
    if (!/^[a-zA-Z0-9\s]+$/.test(name)) throw new CategoryError('Category name can only contain alphanumeric characters and spaces')
    if (!/^[a-zA-Z0-9-]+$/.test(id_category)) throw new CategoryError('Category ID can only contain alphanumeric characters and hyphens')
    if (name.trim() === '') throw new CategoryError('Category name cannot be empty')
    if (id_category.trim() === '') throw new CategoryError('Category ID cannot be empty')   
  }
}
