import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CardService } from './model/card';
import { CheckoutController } from './checkout.controller';
import { AuthMiddleware } from '../shared';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [CheckoutController],
  providers: [CardService],
})
export class CheckoutModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'checkout', method: RequestMethod.POST });
  }
}
