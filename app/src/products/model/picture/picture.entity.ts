import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProductEntity } from '../product';

@Entity('ProductPicture')
export class PictureEntity {
  @PrimaryColumn({ name: 'productId', type: 'varchar', length: 36 })
  @ManyToOne(() => ProductEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: ProductEntity;

  @PrimaryColumn({ type: 'int', width: 2 })
  position: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
