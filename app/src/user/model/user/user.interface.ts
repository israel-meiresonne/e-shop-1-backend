import { Password } from '../password/password.interface';

export interface User {
  readonly id: string;
  email: string;
  token: string;
  password: Password;
}
