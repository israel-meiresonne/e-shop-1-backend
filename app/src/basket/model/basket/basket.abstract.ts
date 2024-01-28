import { Product } from '../../../products/model/product';
import { Basket } from './basket.interface';

export abstract class BasketAbstract implements Basket {
  constructor(public products: Product[]) {}
}
