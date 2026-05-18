import { Module } from '@nestjs/common';
import {  DemoController } from './controllers/app.controller';
import Demo2Controller from './controllers/demo2.controller';
import { Demo3Controller } from './controllers/demo3.controller';
import { DemoService } from './demo.service';
import { CalculateService } from './calculate.service';
import { RectangleService } from './rectangle.service';
import { StudentService } from './student.service';

@Module({
  imports: [],
  controllers: [DemoController,Demo2Controller,Demo3Controller],
  providers: [DemoService,CalculateService,RectangleService,StudentService],
})
export class AppModule {}
