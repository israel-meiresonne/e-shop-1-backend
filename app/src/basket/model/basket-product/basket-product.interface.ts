import { ProductEntity } from 'src/products/model/product/product.entity';
import { BasketProductEntity } from '../basket-product/basket-product.entity';

export interface BasketProductResponse
  extends ProductEntity,
    BasketProductEntity {}
