import {
  Controller,
  Get,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { CalculateService } from 'src/calculate.service';
import { DemoService } from 'src/demo.service';
import { RectangleService } from 'src/rectangle.service';
import { StudentService } from 'src/student.service';

@Controller('api/demo3')
export class Demo3Controller {
  constructor(
    private demoService: DemoService,
    private calculateService: CalculateService,
    private rectangleService: RectangleService,
    private studentService: StudentService,
  ) {}

  @Get('index')
  index() {
    return {
      result: this.demoService.hello(),
    };
  }

  @Get('index2/:fullName')
  index2(@Param('fullName') fullName: string) {
    return {
      result: this.demoService.hi(fullName),
    };
  }

  @Get('index3/:a/:b')
  index3(
    @Param('a', ParseFloatPipe) a: number,
    @Param('b', ParseFloatPipe) b: number,
  ) {
    return {
      add: this.calculateService.add(a, b),
      mul: this.calculateService.mul(a, b),
    };
  }

  @Get('area/:a/:b')
  area(
    @Param('a', ParseFloatPipe) a: number,
    @Param('b', ParseFloatPipe) b: number,
  ) {
    return {
      area: this.rectangleService.area(a, b),
    };
  }

  @Get('perimeter/:a/:b')
  perimeter(
    @Param('a', ParseFloatPipe) a: number,
    @Param('b', ParseFloatPipe) b: number,
  ) {
    return {
      perimeter: this.rectangleService.perimeter(a, b),
    };
  }

  @Get('find-all')
  findAll() {
    return this.studentService.findAll();
  }

  @Get('find-by-id/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.studentService.findById(id);
  }
}
