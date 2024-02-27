import { IsInstance } from 'class-validator';
import { CardDto } from './card.dto';
import { Type } from 'class-transformer';

export class CreateCheckoutDto {
  @IsInstance(CardDto)
  @Type(() => CardDto)
  readonly card: CardDto;
}
