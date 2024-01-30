import { Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from '../../dto';

@Injectable()
export class CardService {
  create(createCheckoutDto: CreateCheckoutDto) {
    return `This action adds a new checkout: ${JSON.stringify(createCheckoutDto)}`;
  }
}
