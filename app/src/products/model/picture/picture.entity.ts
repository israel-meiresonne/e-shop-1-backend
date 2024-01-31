import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('ProductPicture')
export class PictureEntity {
  @PrimaryColumn({ type: 'int', width: 2 })
  position: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;
}
