import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from '../../dto';
import { CardEntity } from './card.entity';
import { CardResponse } from '.';

@Injectable()
export class CardService {
  create(createCheckoutDto: CreateCheckoutDto) {
    return `This action adds a new checkout: ${JSON.stringify(createCheckoutDto)}`;
  }

  private toResponse(cardEntity: CardEntity): CardResponse {
    return {
      id: cardEntity.id,
    };
  }
}
