import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { BasketModule } from './basket/basket.module';
import { CheckoutModule } from './checkout/checkout.module';
import { DatabaseConf } from './config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Entities } from './shared/entities';

const filledDatabaseConf = {
  ...DatabaseConf,
  entities: Entities,
} as TypeOrmModuleOptions;

@Module({
  imports: [
    TypeOrmModule.forRoot(filledDatabaseConf),
    UserModule,
    ProductsModule,
    BasketModule,
    CheckoutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
