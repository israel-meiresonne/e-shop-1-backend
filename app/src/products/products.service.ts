import { Injectable } from '@nestjs/common';
import { FilterProductDto } from './dto';

@Injectable()
export class ProductsService {
  findAll(filterProductDto: FilterProductDto) {
    return `This action returns all products: ${JSON.stringify(filterProductDto)}`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
