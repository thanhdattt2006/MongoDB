import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  // Thêm mới học sinh
  @Post('create')
  async create(@Body() studentData: Partial<Student>) {
    try {
      const data = await this.studentService.create(studentData);
      return {
        status: HttpStatus.CREATED,
        message: 'Created successfully',
        data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to create student',
        error: error.message || error,
      };
    }
  }

  // Lấy danh sách tất cả học sinh
  @Get('find-all')
  async findAll() {
    try {
      const data = await this.studentService.findAll();
      return {
        status: HttpStatus.OK,
        message: 'Succeeded',
        data,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to fetch students',
        error: error.message || error,
      };
    }
  }

  // Lấy danh sách tất cả học sinh (có kiểm tra dữ liệu rỗng)
  @Get('find-all2')
  async findAll2() {
    try {
      const data = await this.studentService.findAll();
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'No data found',
          data: [],
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
        message: 'Failed to fetch students',
        error: error.message || error,
      };
    }
  }

  // Tìm kiếm học sinh theo tên
  @Get('find-by-name/:name')
  async findByName(@Param('name') name: string) {
    try {
      const data = await this.studentService.findByName(name);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Student not found',
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
        message: 'Failed to fetch student',
        error: error.message || error,
      };
    }
  }

  // Tìm kiếm học sinh theo khoảng điểm (min - max)
  @Get('find-by-min-max/:minScore/:maxScore')
  async findByMinMax(@Param('minScore') minScore: string, @Param('maxScore') maxScore: string) {
    try {
      const minScoreNum = Number(minScore);
      const maxScoreNum = Number(maxScore);
      const data = await this.studentService.findByMinMax(minScoreNum, maxScoreNum);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Student not found',
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
        message: 'Failed to fetch student',
        error: error.message || error,
      };
    }
  }

  // Tìm kiếm học sinh theo ID
  @Get('find-by-id/:id')
  async findById(@Param('id') id: string) {
    try {
      const data = await this.studentService.findById(id);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Student not found',
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
        message: 'Failed to fetch student',
        error: error.message || error,
      };
    }
  }

  // Cập nhật thông tin học sinh theo ID
  @Put('update/:id')
  async update(@Param('id') id: string, @Body() studentData: Partial<Student>) {
    try {
      const data = await this.studentService.update(id, studentData);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Student not found to update',
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
        message: 'Failed to update student',
        error: error.message || error,
      };
    }
  }

  // Xóa học sinh theo ID
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try {
      const data = await this.studentService.remove(id);
      if (!data) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Student not found to delete',
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
        message: 'Failed to delete student',
        error: error.message || error,
      };
    }
  }
}
