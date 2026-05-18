import { Injectable } from "@nestjs/common";
import { CalculateService } from "./calculate.service";

@Injectable()
export class RectangleService{
    constructor(
        private calculateService: CalculateService
    ){}

    area(a: number, b:number){
        return this.calculateService.mul(a,b);
    }

    perimeter(a: number, b:number){
        return this.calculateService.mul(this.calculateService.add(a,b),2);
    }
}