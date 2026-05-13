import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DemoController from './demo.controller';

@Module({
  imports: [],
  controllers: [
    DemoController
  ],
  providers: [AppService],
})
export class AppModule {}
