import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.model';

@Injectable()
export class CategoryService implements OnModuleInit {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) { }

  async onModuleInit() {
    try {
      const count = await this.categoryModel.countDocuments().exec();
      if (count === 0) {
        console.log('[Seeder] Category collection is empty. Seeding sample data...');
        const sampleCategories = [
          { name: 'Electronics' },
          { name: 'Clothing & Fashion' },
          { name: 'Books & Stationery' },
          { name: 'Home & Kitchen' },
          { name: 'Sports & Outdoors' }
        ];
        await this.categoryModel.insertMany(sampleCategories);
        console.log('[Seeder] Seeded 5 sample categories successfully.');
      }
    } catch (error) {
      console.error('[Seeder] Failed to seed categories:', error.message || error);
    }
  }


  async create(categoryData: Partial<Category>) {
    const createdCategory = new this.categoryModel(categoryData);
    return createdCategory.save();
  }

  async findAll() {
    return this.categoryModel.find().exec();
  }

  async findById(id: string) {
    return this.categoryModel.findById(id).exec();
  }

  async update(id: string, categoryData: Partial<Category>) {
    return this.categoryModel.findByIdAndUpdate(id, categoryData, { new: true }).exec();
  }

  async remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }
}
