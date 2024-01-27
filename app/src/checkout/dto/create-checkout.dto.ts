import { IsInt, IsString } from 'class-validator';

export class CreateCheckoutDto {
  @IsString()
  readonly firstname: string;

  @IsString()
  readonly lastname: string;

  @IsInt()
  readonly digit: string;
}
