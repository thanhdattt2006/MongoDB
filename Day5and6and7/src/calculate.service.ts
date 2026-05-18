import { Injectable } from "@nestjs/common";

@Injectable()
export class CalculateService{
    add(a:number,b:number){
        return a+b;
    }

    mul(a:number,b:number){
        return a*b;
    }
}