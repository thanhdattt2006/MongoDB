import { Module } from '@nestjs/common';
import { Demo4Service } from './demo4.service';
import { Demo4Controller } from './demo4.controller';
import { SquareService } from './Square.service';
import { SquareController } from './Square.controller';

@Module({
  providers: [Demo4Service, SquareService],
  // FIX: Added missing comma at the end of the controllers array.
  controllers: [Demo4Controller, SquareController],
  // FIX: You export services/providers from a module, not the module itself.
  // So instead of exports: [Demo4Module], you export the services you want to share.
  exports: [Demo4Service, SquareService],
})
export class Demo4Module {}
