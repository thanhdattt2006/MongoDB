import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Category } from './category.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {

    constructor(
        @InjectModel(Category.name)
        private categoryModel: Model<Category>
    ) { }

    findAll() {
        return this.categoryModel.find().exec();
    }

    findById(id: string) {
        return this.categoryModel.findById(id).exec();
    }

    create(category: Category) {
        return this.categoryModel.create(category);
    }

    async delete(id: string) {
        let category = await this.categoryModel.findByIdAndDelete(id).exec();
        return category != null;
    }

    async update(id: string, category: Category) {
        let cate = await this.categoryModel.findByIdAndUpdate(id, category, {
            new: true
        }).exec();
        return cate != null;
    }

}
