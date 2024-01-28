import { Password } from '../password';
import { User } from './user.interface';

export abstract class UserAbstract implements User {
  constructor(
    readonly id: string,
    public email: string,
    public token: string,
    public password: Password,
  ) {}
}
