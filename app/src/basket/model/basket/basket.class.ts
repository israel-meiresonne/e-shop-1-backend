import { Basket } from './basket.interface';
import { BasketAbstract } from './basket.abstract';

export function createBasket(obj: BasketAbstract): Basket {
  const { products } = obj;
  return new BasketCLass(products);
}

class BasketCLass extends BasketAbstract {}
