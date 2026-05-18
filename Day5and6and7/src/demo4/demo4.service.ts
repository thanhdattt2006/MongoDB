import { Injectable } from '@nestjs/common';

@Injectable()
export class Demo4Service {
  hello () {
    const msg = "msg";
    return msg;
  }
}
