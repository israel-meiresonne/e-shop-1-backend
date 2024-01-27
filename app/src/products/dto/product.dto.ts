import { IsInt, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  readonly id: string;

  @IsInt()
  readonly quantity: string;
}
