import { Price } from '../price';

export interface Product {
  readonly id: string;
  name: string;
  quantity: number;
  pictures: string[];
  price: Price;
}
