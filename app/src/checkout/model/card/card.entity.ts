import { UserEntity } from '../../../user/model/user';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Card')
export class CardEntity {
  @PrimaryColumn({ name: 'userId', type: 'varchar', length: 36 })
  @ManyToOne(() => UserEntity, (user) => user.card, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: UserEntity;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  firstname: string;

  @Column({ type: 'varchar', length: 50 })
  lastname: string;

  @Column({ type: 'varchar', length: 32 })
  digit: string;
}
