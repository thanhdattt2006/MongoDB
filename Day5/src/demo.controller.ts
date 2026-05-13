import { Controller, Get, Header, Param, ParseIntPipe, Query, Post, Body, ParseFloatPipe, ParseBoolPipe } from "@nestjs/common";

@Controller("api/demo") // localhost:3000/api/demo
export default class DemoController {
  @Header('Content-Type', 'text/plain')
  @Get('index') // localhost:3000/api/demo/index
  index () {
    return 'Hello World';
  }

  @Header('Content-Type', 'text/html')
  @Get('index2') // localhost:3000/api/demo/index2
  index2 () {
    return '<h1><b>Hello World</b></h1>';
  }

  @Get('index3') // localhost:3000/api/demo/index3
  index3 () {
    return {
      id: 3,
      name : 'Dave',
      age: 20
    }
  }

  @Get('index4') // localhost:3000/api/demo/index4
  index4 () {
    return [
      {
        id: 1, 
        name: 'A',
        age: 20
      },
      {
        id: 2,
        name: 'B',
        age: 21
      },
      {
        id: 3,
        name: 'C',
        age: 22
      }
    ]
  }

  @Get('index5/:id') // localhost:3000/api/demo/index5/5
  index5 (@Param("id") id: string) {
    return {
      id: id
    }
  }

  @Get('index6/:username/:id/:price/:status') // localhost:3000/api/demo/index6/dave/5/3.5/true
  index6 (@Param("id", ParseIntPipe) id: number,
          @Param("username") username: string,
          @Param("price", ParseFloatPipe) price: number,
          @Param("status", ParseBoolPipe) status: boolean) {
    return {
      username: username,
      id: id,
      price: price,
      status: status
    }
  }

  // --- Các cách xử lý nhiều tham số ngắn gọn hơn ---

  // Sử dụng Query Parameters (@Query()) cho GET requests
  // Ví dụ: GET localhost:3000/api/demo/index7?username=dave&id=5&status=active
  @Get('index7')
  index7(
    @Query('id', ParseIntPipe) id: number, // Tham số 'id' từ query string, tự động chuyển sang số
    @Query('username') username: string, // Tham số 'username' từ query string
    @Query('status') status?: string, // Tham số 'status' là tùy chọn (có thể không có)
  ) {
    return {
      message: 'Dữ liệu nhận được từ query parameters',
      username: username,
      id: id,
      status: status || 'Không có trạng thái', // Xử lý trường hợp status không được cung cấp
    };
  }
}
