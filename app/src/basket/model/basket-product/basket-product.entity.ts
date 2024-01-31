import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Basket')
export class BasketProductEntity {
  @PrimaryColumn({ type: 'varchar', length: 30 })
  userId: string;
  @PrimaryColumn({ type: 'varchar', length: 30 })
  productId: string;
  @Column({ type: 'int', width: 2 })
  quantity: number;
}
