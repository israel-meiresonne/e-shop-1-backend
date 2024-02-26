import { IsEnum, IsInt } from 'class-validator';

enum SortFilterProduct {
  ASC = 'ASC',
  DESC = 'DESC',
}

enum CriteriaFilterProduct {
  PRICE = 'PRICE',
  NAME = 'NAME',
}

export class FilterProductDto {
  @IsEnum(SortFilterProduct)
  readonly sort?: SortFilterProduct;

  @IsEnum(CriteriaFilterProduct)
  readonly criteria?: CriteriaFilterProduct;

  @IsInt()
  readonly limit?: number;

  @IsInt()
  readonly page?: number;
}
