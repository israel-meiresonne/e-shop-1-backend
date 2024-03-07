import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, DeleteUserDto, LoginUserDto } from '../../dto';
import { UserEntity } from './user.entity';
import { UserResponse } from './user.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  private readonly inputFailMessage = 'Input failed.';

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const oldUser = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (oldUser) {
      throw new HttpException(this.inputFailMessage, HttpStatus.BAD_REQUEST, {
        cause: new Error(`User email '${createUserDto.email}' already exists`),
        description: '<error-code>',
      });
    }
    const newUser = new UserEntity();
    newUser.email = createUserDto.email;
    newUser.hash = await argon2.hash(createUserDto.password);
    const savedUser = await this.userRepository.save(newUser);
    return this.toResponse(savedUser);
  }

  async delete(deleteUserDto: DeleteUserDto) {
    return await this.userRepository.delete({ email: deleteUserDto.email });
  }

  async login(loginUserDto: LoginUserDto) {
    const user = (await this.findByEmail(
      loginUserDto.email,
      undefined,
      false,
    )) as UserEntity;
    const isSuccess = await argon2.verify(user.hash, loginUserDto.password);
    if (!isSuccess) {
      throw new HttpException(this.inputFailMessage, HttpStatus.BAD_REQUEST, {
        cause: new Error('Invalid password.'),
        description: '<error-code>',
      });
    }
    return this.toResponse(user);
  }

  async findByEmail(
    email: string,
    httpStatus: HttpStatus = HttpStatus.BAD_REQUEST,
    toResponse: boolean = true,
  ): Promise<UserResponse | UserEntity> {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) {
      throw new HttpException(this.inputFailMessage, httpStatus, {
        cause: new Error(`Can't find user with email '${email}'`),
        description: '<error-code>',
      });
    }
    return toResponse ? this.toResponse(user) : user;
  }

  async findById(id: string, httpStatus: HttpStatus = HttpStatus.BAD_REQUEST) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException(this.inputFailMessage, httpStatus, {
        cause: new Error(`Can't find user with id '${id}'.`),
        description: '<error-code>',
      });
    }
    return this.toResponse(user);
  }

  private toResponse(userEntity: UserEntity): UserResponse {
    return {
      id: userEntity.id,
      email: userEntity.email,
    };
  }
}
