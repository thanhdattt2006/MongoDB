import { Injectable } from "@nestjs/common";

@Injectable()
export class SquareService {

  area (a: number) {
    return a*a;
  }

  perimeter (a: number) {
    return a*4;
  }
}
