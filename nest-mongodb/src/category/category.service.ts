import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) { }

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
