import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Controller('api/category')
export class CategoryController {

    constructor(
        private categoryService: CategoryService
    ) { }

    @Get('find-all')
    findAll() {
        try {
            return this.categoryService.findAll();
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('find-all2')
    async findAll2() {
        try {
            let result = await this.categoryService.findAll();
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

    @Get('find-by-id/:id')
    async findById(@Param('id') id: string) {
        try {
            let category = await this.categoryService.findById(id);
            if (category == null) {
                throw new HttpException({
                    msg: 'Not Found'
                }, HttpStatus.NOT_FOUND);
            }
            else {
                return category;
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('create')
    async create(@Body() category: Category) {
        try {
            await this.categoryService.create(category);
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

    @Delete('delete/:id')
    async delete(@Param('id') id: string) {
        try {
            if (await this.categoryService.delete(id)) {
                return {
                    msg: 'Success'
                };
            }
            else {
                throw new HttpException({
                    msg: 'Failed'
                }, HttpStatus.BAD_REQUEST);
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Put('update')
    async update(@Body() category: Category) {
        try {
            if (await this.categoryService.update(category._id.toString(), category)) {
                return {
                    msg: 'Success'
                };
            }
            else {
                throw new HttpException({
                    msg: 'Failed'
                }, HttpStatus.BAD_REQUEST);
            }
        }
        catch (ex) {
            throw new HttpException({
                msg: 'Failed'
            }, HttpStatus.BAD_REQUEST);
        }
    }

}
