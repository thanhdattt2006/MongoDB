import { Controller, Get } from '@nestjs/common'; // FIX: Imported the @Get decorator
import { Demo5Service } from './demo5.service'; // FIX: Imported the Demo5Service

@Controller('api/demo5')
export class Demo5Controller {
  // FIX: Corrected typo 'construcor' to 'constructor' so NestJS can properly inject the service.
  constructor(private readonly demo5Service: Demo5Service) {}

  @Get('/hello')
  hello() {
    return {
      msg: this.demo5Service.hello(),
    };
  }
}
