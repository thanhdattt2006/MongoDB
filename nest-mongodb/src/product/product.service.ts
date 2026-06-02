import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { plainToInstance } from 'class-transformer';
import { ProductDTO } from './dtos/product.dto';
import { ProductInsertDTO } from './dtos/product_insert.dto';
import { ProductUpdateDTO } from './dtos/product_update.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name)
        private productModel: Model<Product>
    ) { }

    findAll() {
        return this.productModel.find().exec();
    }

    async findAllDTO() {
        let products = await this.productModel.find().exec();
        return products.map(p => plainToInstance(ProductDTO, p.toObject(), {
            excludeExtraneousValues: true
        }));
    }

    async findById(id: string) {
        let product = await this.productModel.findById(id).exec();
        return plainToInstance(ProductDTO, product, {
            excludeExtraneousValues: true
        });
    }

    async findByStatus(status: boolean) {
        let products = await this.productModel.find({
            status: status
        }).exec();
        return products.map(p => plainToInstance(ProductDTO, p.toObject(), {
            excludeExtraneousValues: true
        }));
    }

    create(productInsertDTO: ProductInsertDTO) {
        let product = new this.productModel(productInsertDTO);
        return product.save();
    }

    async update(productUpdateDTO: ProductUpdateDTO) {
        let product = await this.productModel.findById(productUpdateDTO.id);
        if (product == null) {
            throw new HttpException({
                msg: 'Not Found'
            }, HttpStatus.NOT_FOUND);
        }
        else {
            Object.assign(product, productUpdateDTO);
            return product.save();
        }
    }

}
