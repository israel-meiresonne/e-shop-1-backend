import { ProductEntity } from '../../../products/model/product/product.entity';
import { UserEntity } from '../../../user/model/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('Basket')
export class BasketProductEntity {
  @PrimaryColumn({ name: 'userId', type: 'varchar', length: 36 })
  @ManyToOne(() => UserEntity, (user) => user.basket, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserEntity;

  @PrimaryColumn({ name: 'productId', type: 'varchar', length: 36 })
  @ManyToOne(() => ProductEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: ProductEntity;

  @Column({ type: 'int', width: 2 })
  quantity: number;
}
