import { PickType } from '@nestjs/mapped-types';
import { ProductDto } from '../../products/dto';

export class UpdateProductBasketDto extends PickType(ProductDto, [
  'id',
  'quantity',
]) {}
