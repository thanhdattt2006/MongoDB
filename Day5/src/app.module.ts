import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DemoController from './controller/demo.controller';
import Demo2Controller from './controller/demo2.controller';

@Module({
  imports: [],
  controllers: [
    DemoController,
    Demo2Controller
  ],
  providers: [AppService],
})
export class AppModule {}
