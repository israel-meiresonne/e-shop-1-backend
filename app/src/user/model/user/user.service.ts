import { Injectable } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto, LoginUserDto } from '../../dto';
import { UserEntity } from './user.entity';
import { UserResponse } from './user.interface';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return `This action adds a new user: ${JSON.stringify(createUserDto)}`;
  }

  delete(deleteUserDto: DeleteUserDto) {
    return `This action delete the user: ${JSON.stringify(deleteUserDto)}`;
  }

  login(loginUserDto: LoginUserDto) {
    return `This action log in an user: ${JSON.stringify(loginUserDto)}`;
  }

  private toResponse(userEntity: UserEntity): UserResponse {
    return {
      id: userEntity.id,
      email: userEntity.email,
      token: userEntity.token,
    };
  }
}
