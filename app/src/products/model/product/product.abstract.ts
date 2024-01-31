import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class ProductBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
