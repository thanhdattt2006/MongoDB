import { Module } from '@nestjs/common';
import { Demo5Service } from './demo5.service';
import { Demo5Controller } from './demo5.controller';
// FIX: Corrected the relative path. Demo4Module is located in the demo4 directory,
// so we need to go up one level (../) and then into demo4.
import { Demo4Module } from '../demo4/demo4.module';

@Module({
  providers: [Demo5Service],
  controllers: [Demo5Controller],
  imports: [Demo4Module],
})
export class Demo5Module {}
