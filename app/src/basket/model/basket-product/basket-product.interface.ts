import { ProductEntity } from 'src/products/model/product';
import { BasketProduct } from '../basket-product';

export interface BasketProductResponse extends ProductEntity, BasketProduct {}
