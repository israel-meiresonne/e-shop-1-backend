import { Card } from './card.interface';

export abstract class CardAbstract implements Card {
  constructor(
    public firstname: string,
    public lastname: string,
    public digit: string,
  ) {}
}
