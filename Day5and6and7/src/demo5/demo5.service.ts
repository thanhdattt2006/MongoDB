import { Injectable } from '@nestjs/common';

@Injectable()
export class Demo5Service {
  hello() {
    return 'Hello from Demo5Service';
  }
}
