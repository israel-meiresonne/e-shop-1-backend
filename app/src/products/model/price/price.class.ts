import { PriceAbstract } from './price.abstract';
import { Price } from './price.interface';

export function createPrice(obj: PriceAbstract): Price {
  const { value, symbol } = obj;
  return new PriceClass(value, symbol);
}

class PriceClass extends PriceAbstract {}
