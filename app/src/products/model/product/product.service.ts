import { Injectable } from '@nestjs/common';
import { FilterProductDto } from '../../dto';
import { ProductEntity } from './product.entity';
import { ProductResponse } from './product.interface';

@Injectable()
export class ProductsService {
  findAll(filterProductDto: FilterProductDto) {
    return `This action returns all products: ${JSON.stringify(filterProductDto)}`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  toResponse(productEntity: ProductEntity): ProductResponse {
    return {
      id: productEntity.id,
      name: productEntity.name,
      pictures: productEntity.pictures,
      price: productEntity.price,
    };
  }
}
