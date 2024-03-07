import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto, LoginUserDto } from '../../dto';
import { UserEntity } from './user.entity';
import { UserResponse } from './user.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return `This action adds a new user: ${JSON.stringify(createUserDto)}`;
  }

  delete(deleteUserDto: DeleteUserDto) {
    return `This action delete the user: ${JSON.stringify(deleteUserDto)}`;
  }

  login(loginUserDto: LoginUserDto) {
    return `This action log in an user: ${JSON.stringify(loginUserDto)}`;
  }

  async findById(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.FORBIDDEN, {
        cause: new Error(`Can't find user with id '${id}'`),
        description: '<error-code>',
      });
    }
    return this.toResponse(user);
  }

  private toResponse(userEntity: UserEntity): UserResponse {
    return {
      id: userEntity.id,
      email: userEntity.email,
      token: userEntity.token,
    };
  }
}
