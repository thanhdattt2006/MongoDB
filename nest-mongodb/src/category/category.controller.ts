import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  // Thêm mới danh mục
  @Post('create')
  async create(@Body() categoryData: Partial<Category>) {
    try {
      const data = await this.categoryService.create(categoryData);
      return {
        status: HttpStatus.CREATED,
        message: 'Created successfully',
        data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to create category',
        error: error.message || error,
      };
    }
  }

  // Lấy danh sách tất cả danh mục
  @Get('find-all')
  findAll() {
    try {
      const data = this.categoryService.findAll();
      return {
        status: HttpStatus.OK,
        message: 'Succeeded',
        data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to fetch categories',
        error: error.message || error,
      };
    }
  }

  // Lấy danh sách tất cả danh mục (có kiểm tra dữ liệu rỗng)
  @Get('find-all2')
  async findAll2() {
    try {
      let data = await this.categoryService.findAll();
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'No data found',
          data: [],
        };
      } else {
        return {
          status: HttpStatus.OK,
          message: 'Succeeded',
          data,
        };
      }
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to fetch categories',
        error: error.message || error,
      };
    }
  }

  // Tìm kiếm danh mục theo ID
  @Get('find-by-id/:id')
  async findById(@Param('id') id: string) {
    try {
      const data = await this.categoryService.findById(id);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Category not found',
        };
      }
      return {
        status: HttpStatus.OK,
        message: 'Succeeded',
        data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to fetch category',
        error: error.message || error,
      };
    }
  }

  // Cập nhật danh mục theo ID
  @Put(':id')
  async update(@Param('id') id: string, @Body() categoryData: Partial<Category>) {
    try {
      const data = await this.categoryService.update(id, categoryData);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Category not found to update',
        };
      }
      return {
        status: HttpStatus.OK,
        message: 'Updated successfully',
        data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to update category',
        error: error.message || error,
      };
    }
  }

  // Xóa danh mục theo ID
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try {
      const data = await this.categoryService.remove(id);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Category not found to delete',
        };
      }
      return {
        status: HttpStatus.OK,
        message: 'Deleted successfully',
        data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to delete category',
        error: error.message || error,
      };
    }
  }
}

