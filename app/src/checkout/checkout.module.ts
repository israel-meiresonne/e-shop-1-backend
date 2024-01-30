import { Module } from '@nestjs/common';
import { CardService } from './model/card';
import { CheckoutController } from './checkout.controller';

@Module({
  controllers: [CheckoutController],
  providers: [CardService],
})
export class CheckoutModule {}
