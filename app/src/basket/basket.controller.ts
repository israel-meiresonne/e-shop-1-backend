import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { BasketService } from './model/basket';
import { AddProductBasketDto, UpdateProductBasketDto } from './dto';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post()
  addProducts(@Body() addProductBasketDto: AddProductBasketDto[]) {
    return this.basketService.addProducts(addProductBasketDto);
  }

  @Get()
  getBasket() {
    return this.basketService.findBasket();
  }

  @Patch()
  updateProducts(@Body() updateProductBasketDto: UpdateProductBasketDto[]) {
    return this.basketService.updateProducts(updateProductBasketDto);
  }

  @Delete()
  removeProducts(@Body() ids: string[]) {
    return this.basketService.removeProducts(ids);
  }
}
