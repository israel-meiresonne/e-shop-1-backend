import { Price } from '../price';
import { ProductBase } from './product.abstract';

export class ProductEntity extends ProductBase {
  name: string;
  pictures: string[];
  price: Price;
}
