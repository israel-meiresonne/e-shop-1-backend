import * as argon2 from 'argon2';
import { Password } from './password.interface';

export async function newPassword(password: string): Promise<Password> {
  const hash = await argon2.hash(password);
  return new PasswordClass(hash);
}

export function loadPassword(hash: string): Password {
  return new PasswordClass(hash);
}

class PasswordClass implements Password {
  constructor(readonly hash: string) {}

  async verify(password: string): Promise<boolean> {
    return await argon2.verify(this.hash, password);
  }
}
