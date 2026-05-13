import { Controller, Get, Header, Param, ParseIntPipe } from "@nestjs/common";

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

  @Get('index6/:id') // localhost:3000/api/demo/index6/5
  index6 (@Param("id", ParseIntPipe) id: number) {
    return {
      id: id
    }
  }
}
