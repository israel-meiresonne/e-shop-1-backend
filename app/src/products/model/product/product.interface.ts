import { Price } from '../price';

export interface ProductResponse {
  id: string;
  name: string;
  pictures: string[];
  price: Price;
}
