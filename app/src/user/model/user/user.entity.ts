import { BasketProductEntity } from '../../../basket/model/basket-product';
import { CardEntity } from '../../../checkout/model/card';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true, length: 320 })
  email: string;

  @Column('varchar', { unique: true, length: 30 })
  token: string;

  @Column('varchar', { length: 128 })
  hash: string;

  @OneToMany(() => BasketProductEntity, (basketProduct) => basketProduct.user, {
    cascade: ['insert', 'update', 'remove'],
  })
  basket: BasketProductEntity[];

  @OneToMany(() => CardEntity, (card) => card.user, {
    cascade: ['insert', 'update', 'remove'],
  })
  card: CardEntity[];
}
