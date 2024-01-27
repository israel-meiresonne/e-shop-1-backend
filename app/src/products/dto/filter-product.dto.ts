import { IsInt } from 'class-validator';

export enum SortFilterProduct {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum CriteriaFilterProduct {
  PRICE = 'PRICE',
  NAME = 'NAME',
}

export class FilterProductDto {
  readonly sort?: SortFilterProduct;
  readonly criteria?: CriteriaFilterProduct;

  @IsInt()
  readonly limit?: number;

  @IsInt()
  readonly page?: number;
}
