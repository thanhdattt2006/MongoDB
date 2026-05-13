import { Controller, Get, Param, ParseBoolPipe } from "@nestjs/common";
import { Product } from "src/entity/product.entity";

@Controller("api/demo2")
export default class Demo2Controller {

  products: Product[];

  constructor () {
    this.products = [
      {
        id: 1,
        name: 'Laptop',
        price: 1000,
        quantity: 10,
        status: true
      },
      {
        id: 2,
        name: 'Phone',
        price: 500,
        quantity: 20,
        status: true
      },
      {
        id: 3,
        name: 'Tablet',
        price: 300,
        quantity: 0,
        status: false
      },
      {
        id: 4,
        name: 'TV',
        price: 800,
        quantity: 5,
        status: true
      },
      {
        id: 5,
        name: 'Monitor',
        price: 200,
        quantity: 30,
        status: true
      }
    ]
  }

  @Get('findAll')
  findAll () {
    return this.products;
  }

  @Get('find-by-status/:status')
  findById (@Param("status", ParseBoolPipe) status: boolean) {
    let result = this.products.filter(p => p.status == status)
    return {
      products: result
    }
  }

}
