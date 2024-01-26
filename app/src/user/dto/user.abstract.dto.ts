import { IsNotEmpty, IsEmail } from 'class-validator';

export abstract class UserAbstractDto {
  @IsEmail()
  public readonly email: string;

  @IsNotEmpty()
  public readonly password: string;
}
