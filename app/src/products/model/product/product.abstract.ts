import { Price } from '../price';
import { Product } from './product.interface';

export abstract class ProductAbstract implements Product {
  constructor(
    readonly id: string,
    public name: string,
    public quantity: number,
    public pictures: string[],
    public price: Price,
  ) {}
}
