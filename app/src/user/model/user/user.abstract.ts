import { Password } from '../password';
import { User } from './user.interface';

export abstract class UserAbstract implements User {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly token: string,
    readonly password: Password,
  ) {}
}
