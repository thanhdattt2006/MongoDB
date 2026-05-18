import { Module } from '@nestjs/common';
import { Demo5Service } from './demo5.service';
import { Demo5Controller } from './demo5.controller';

@Module({
  providers: [Demo5Service],
  controllers: [Demo5Controller]
})
export class Demo5Module {}
