import { CardAbstract } from './card.abstract';
import { Card } from './card.interface';

export function createCard(obj: CardAbstract): Card {
  const { id, firstname, lastname, digit } = obj;
  return new CardClass(id, firstname, lastname, digit);
}

class CardClass extends CardAbstract {}
