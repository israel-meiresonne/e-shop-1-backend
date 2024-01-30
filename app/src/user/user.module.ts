import { Module } from '@nestjs/common';
import { UserService } from './model/user';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
