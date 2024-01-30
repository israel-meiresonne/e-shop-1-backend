import { Password } from '../password';

export class UserEntity {
  id: string;
  email: string;
  token: string;
  password: Password;
}
