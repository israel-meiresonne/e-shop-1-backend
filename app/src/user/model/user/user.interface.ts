import { Password } from '../password/password.interface';

export interface User {
  readonly id: string;
  readonly email: string;
  readonly token: string;
  readonly password: Password;
}
