import { Column, Entity } from 'typeorm';
import { ProductBase } from './product.abstract';

@Entity('Product')
export class ProductEntity extends ProductBase {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'float', width: 5 })
  price: number;

  @Column({ type: 'varchar', length: 10 })
  symbol: string;
}
