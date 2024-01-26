import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsEmail()
  public readonly email: string;

  @IsNotEmpty()
  public readonly password: string;
}
