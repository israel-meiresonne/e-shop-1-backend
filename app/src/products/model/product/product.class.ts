import { Product } from './product.interface';
import { ProductAbstract } from './product.abstract';

export function createProduct(obj: ProductAbstract): Product {
  const { id, name, quantity, pictures, price } = obj;
  return new ProductClass(id, name, quantity, pictures, price);
}

class ProductClass extends ProductAbstract {}
