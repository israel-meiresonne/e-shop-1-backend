import { Module } from '@nestjs/common';
import { UserEntity } from './model/user/user.entity';
import { UserService } from './model/user';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
