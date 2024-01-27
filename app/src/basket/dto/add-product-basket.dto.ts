import { PickType } from '@nestjs/mapped-types';
import { ProductDto } from '../../products/dto';

export class AddProductBasketDto extends PickType(ProductDto, [
  'id',
  'quantity',
]) {}
