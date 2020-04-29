import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async findAndCreateIfNotExists(title: string): Promise<Category> {
    let categoryExists = await this.findOne({ where: { title } });

    if (!categoryExists) {
      categoryExists = await this.save(this.create({ title }));
    }

    return categoryExists;
  }
}

export default CategoriesRepository;
