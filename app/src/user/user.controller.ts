import { Controller, Post, Delete, Body } from '@nestjs/common';
import { UserResponse, UserService } from './model/user';
import { CreateUserDto, DeleteUserDto, LoginUserDto } from './dto';
import { MyJWT } from '../shared';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete()
  async delete(@Body() deleteUserDto: DeleteUserDto) {
    await this.userService.delete(deleteUserDto);
    return { isSuccess: true };
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserResponse> {
    const user = await this.userService.login(loginUserDto);
    const keys = await MyJWT.getKeys();
    const jwt = await (await MyJWT.sign(user))
      .setExpirationTime('2h')
      .sign(keys.privateKey);
    user.token = jwt;
    return user;
  }
}
