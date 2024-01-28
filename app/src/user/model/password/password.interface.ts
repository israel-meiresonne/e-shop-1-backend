export interface Password {
  readonly hash: string;
  verify(password: string): Promise<boolean>;
}
