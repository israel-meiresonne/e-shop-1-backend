import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
