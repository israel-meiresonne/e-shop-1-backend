import { UserAbstract } from './user.abstract';
import { User } from './user.interface';

export function createUser(obj: UserAbstract): User {
  const { id, email, token, password } = obj;
  return new UserClass(id, email, token, password);
}

class UserClass extends UserAbstract {}
