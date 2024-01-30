import { ProductEntity } from 'src/products/model/product';
import { BasketProductEntity } from '../basket-product';

export interface BasketProductResponse
  extends ProductEntity,
    BasketProductEntity {}
