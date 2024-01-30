import { Controller, Post, Body } from '@nestjs/common';
import { CardService } from './model/card';
import { CreateCheckoutDto } from './dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CardService) {}

  @Post()
  create(@Body() createCheckoutDto: CreateCheckoutDto) {
    return this.checkoutService.create(createCheckoutDto);
  }
}
