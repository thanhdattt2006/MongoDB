import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  hello() {
    return 'Hello World';
  }

  hi(fullName: string) {
    return 'Hi ' + fullName;
  }
}
