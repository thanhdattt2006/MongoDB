import { Controller, Get, Param, ParseBoolPipe, Query } from "@nestjs/common";
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

  // sort sản phẩm từ min -> max
  @Get('sort-price-from/:min/to/:max')
  sortPriceFromTo (@Param("min") min: number, @Param("max") max: number) {
    let result = this.products.filter(p => p.price >= min && p.price <= max)
    return {
      products: result
    }
  }

  // liệt kê sản phẩm có chứa từ khoá
  @Get('searchByKeyword')
  searchByKeyword (@Query('keyword') keyword: string) {
    let result = this.products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()))
    return {
      products: result
    }
  }

  // kiểm tra sản phẩm có tồn tại
  @Get('check-product/:id')
  checkProduct (@Param("id") id: number) {
    let result = this.products.find(p => p.id == id)
    if (result) {
      return {
        products : result
      }
    } else {
      return 'invalid'
    }
  }

  // sắp xếp theo giá giảm dần
  @Get('sort-price-desc')
  sortPriceDesc () {
    let result = this.products.sort((a, b) => b.price - a.price)
    return {
      products: result
    }
  }

  //
}
