import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseFloatPipe, ParseIntPipe,Put, Post, Query, Delete } from "@nestjs/common";
import { Product } from "../entities/product.entities";

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
  findByStatus (@Param("status", ParseBoolPipe) status: boolean) {
    let result = this.products.filter(p => p.status == status)
    return {
      products: result
    }
  }

  /*Xay dung cac web api sau:
    1. Liet ke cac san pham co gia nam trong khoang tu min den max
    2. Liet ke cac san pham co ten chua tu khoa
    3. Kiem tra 1 ma san pham co ton tai hay khong
    4. Lay thong tin 1 san pham dua tren id
    5. Sap xep cac san pham theo giam giam dan
    6. Lay n san pham co gia lon nhat 
*/

//1. sort sản phẩm từ min -> max
  @Get('find-by-price/:min/:max')
  findByPrice (@Param("min",ParseFloatPipe) min: number, @Param("max", ParseFloatPipe) max: number) {
    let result = this.products.filter(p => p.price >= min && p.price <= max)
    if(result.length == 0){
      throw new HttpException({
        msg:"Not Found"
      },HttpStatus.NOT_FOUND);
    }else{
      return result;
    }
  }

//2. liệt kê sản phẩm có chứa từ khoá
  @Get('find-by-keyword/:keyword')
  findByKeyword (@Param("keyword") keyword: string) {
    let result = this.products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
    if(result.length == 0){
      throw new HttpException({
        msg:"Not Found"
      },HttpStatus.NOT_FOUND);
    }else{
      return result;
    }
  }

//3. kiểm tra 1 ma sản phẩm có tồn tại
  @Get('find-by-id/:id')
  findById (@Param("id",ParseIntPipe) id: number) {
    let product = this.products.find(p => p.id==id);
    if(product == null){
      throw new HttpException({
        msg:"Not Found"
      },HttpStatus.NOT_FOUND);
    }else{
      return product;
    }
  }

//4. Lay thong tin 1 san pham dua tren id
  

//Post,Put,Delete
@Post("create")
create(@Body() product: Product){
  console.log('Create New Product');
  console.log('id: ' + product.id );
  console.log('name: ' + product.name );
  console.log('price: ' + product.price );
  console.log('quantity: ' + product.quantity );
  console.log('status: ' + product.status );

}

@Put("update")
update(@Body() product: Product){
  console.log('Update New Product');
  console.log('id: ' + product.id );
  console.log('name: ' + product.name );
  console.log('price: ' + product.price );
  console.log('quantity: ' + product.quantity );
  console.log('status: ' + product.status );

}

@Delete("delete/:id")
delete(@Param("id") id: string){
  console.log('Delete Product'+id);
}
}