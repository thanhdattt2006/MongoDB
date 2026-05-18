import { Controller, Get } from '@nestjs/common';
import { Demo4Service } from './demo4.service';

@Controller('api/demo4')
export class Demo4Controller {
  constructor (
    private demo4Service: Demo4Service
  ) {}

  @Get('/hello')
  hello () {
    return {
      msg: this.demo4Service.hello(),
    }
  }
}
