import { Module } from '@nestjs/common';
import { Demo4Service } from './demo4.service';
import { Demo4Controller } from './demo4.controller';
import { SquareService } from './Square.service';
import { SquareController } from './Square.controller';

@Module({
  providers: [Demo4Service, SquareService],
  controllers: [Demo4Controller, SquareController]
})
export class Demo4Module {}
