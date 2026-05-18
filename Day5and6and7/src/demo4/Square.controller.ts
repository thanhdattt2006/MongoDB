import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { SquareService } from './Square.service';

@Controller('api/square')
export class SquareController {
  constructor(private squareService: SquareService) {}

  @Get('perimeter/:a')
  perimeter(@Param('a', ParseFloatPipe) a: number) {
    return {
      perimeter: this.squareService.perimeter(a),
    };
  }

  @Get('area/:a')
  area(@Param('a', ParseFloatPipe) a: number) {
    return {
      area: this.squareService.area(a),
    };
  }
}
