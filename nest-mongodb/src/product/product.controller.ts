import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInsertDTO } from './dtos/product_insert.dto';
import { ProductUpdateDTO } from './dtos/product_update.dto';

@Controller('api/product')
export class ProductController {

    constructor(
        private productService: ProductService
    ) { }

    @Get('find-all')
    findAll() {
        try {
            return this.productService.findAll();
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-all-dto')
    async findAllDTO() {
        try {
            return await this.productService.findAllDTO();
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-by-id/:id')
    async findById(@Param('id') id: string) {
        try {
            let product = await this.productService.findById(id);
            if (product == null) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return product;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-by-status/:status')
    async findByStatus(@Param('status', ParseBoolPipe) status: boolean) {
        try {
            let result = await this.productService.findByStatus(status);
            if (result.length == 0) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return result;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('create')
    async create(@Body() productInsertDTO: ProductInsertDTO) {
        try {
            await this.productService.create(productInsertDTO);
            return {
                msg: 'Success'
            };
        }
        catch (ex) {            
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('update')
    async update(@Body() productUpdateDTO: ProductUpdateDTO) {
        try {
            await this.productService.update(productUpdateDTO);
            return {
                msg: 'Success'
            };
        }
        catch (ex) {            
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

}
