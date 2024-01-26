import { Controller, Post, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, DeleteUserDto, LoginUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete()
  delete(@Body() deleteUserDto: DeleteUserDto) {
    return this.userService.delete(deleteUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }
}
