import { Injectable } from '@nestjs/common';
import { AddProductBasketDto, UpdateProductBasketDto } from '../../dto';

@Injectable()
export class BasketService {
  addProducts(addProductBasketDto: AddProductBasketDto[]) {
    return `This action adds a new product to the basket: ${JSON.stringify(addProductBasketDto)}`;
  }

  findBasket() {
    return `This action returns the basket`;
  }

  updateProducts(updateProductBasketDto: UpdateProductBasketDto[]) {
    return `This action update products in basket: ${JSON.stringify(updateProductBasketDto)}`;
  }

  removeProducts(ids: string[]) {
    return `This action removes products from basket: #${JSON.stringify(ids)}`;
  }
}
