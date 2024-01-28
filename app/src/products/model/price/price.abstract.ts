import { Price } from './price.interface';

export abstract class PriceAbstract implements Price {
  constructor(
    public value: number,
    public symbol: string,
  ) {}
}
