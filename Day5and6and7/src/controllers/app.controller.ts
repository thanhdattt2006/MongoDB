import {
  Controller,
  Get,
  Header,
  Param,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

@Controller('api/demo')
export class DemoController {
  //GET,POST,PUT,DELETE
  //localhost:3000/api/demo/index
  @Header('Content-Type', 'text/plain') //text/plain tra ve dang chuoi
  @Get('index')
  index() {
    return 'Hello World';
  }

  @Header('Content-Type', 'text/html')
  @Get('index2')
  index2() {
    return '<b><i>Hello World</b></i>';
  }

  @Get('index3')
  index3() {
    return { id: 1, name: 'Student 1', score: 7.8 };
  }

  @Get('index4')
  index4() {
    return [
      { id: 1, name: 'Student 1', score: 7.8 },
      { id: 2, name: 'Student 2', score: 8.5 },
      { id: 3, name: 'Student 3', score: 6.7 },
    ];
  }

  @Get('index5/:id')
  index5(@Param('id') id: string) {
    return { id: id };
  }

  @Get('index6/:id/:username')
  index6(
    @Param('id', ParseIntPipe) id: number,
    @Param('username') username: string,
    @Param('price', ParseFloatPipe) price: number,
    @Param('status', ParseBoolPipe) status: boolean,
  ) {
    return {
      id: id,
      username: username,
      price: price,
      status: status,
    };
  }

  //http://localhost:3000/api/demo/index7?id=4
  @Get('index7')
  index7(
    @Query('id', ParseIntPipe) id: number,
    @Query('username') username: string,
  ) {
    return {
      id: id,
      username: username,
    };
  }
}
