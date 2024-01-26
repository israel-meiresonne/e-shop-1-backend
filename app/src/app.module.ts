import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [UserModule, ProductsModule, BasketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
