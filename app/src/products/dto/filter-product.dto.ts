import { Type } from 'class-transformer';
import { IsEnum, IsInt } from 'class-validator';

enum SortFilterProduct {
  ASC = 'asc',
  DESC = 'desc',
}

enum CriteriaFilterProduct {
  PRICE = 'price',
  NAME = 'name',
}

export class FilterProductDto {
  @IsEnum(SortFilterProduct)
  readonly sort?: SortFilterProduct;

  @IsEnum(CriteriaFilterProduct)
  readonly criteria?: CriteriaFilterProduct;

  @IsInt()
  @Type(() => Number)
  readonly limit?: number;

  @IsInt()
  @Type(() => Number)
  readonly page?: number;
}
