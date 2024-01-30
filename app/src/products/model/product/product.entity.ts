import { Price } from '../price';

export class ProductEntity {
  id: string;
  name: string;
  pictures: string[];
  price: Price;
}
