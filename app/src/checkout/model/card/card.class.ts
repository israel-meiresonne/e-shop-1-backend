import { CardAbstract } from './card.abstract';
import { Card } from './card.interface';

export function createCard(obj: CardAbstract): Card {
  const { firstname, lastname, digit } = obj;
  return new CardClass(firstname, lastname, digit);
}

class CardClass extends CardAbstract {}
