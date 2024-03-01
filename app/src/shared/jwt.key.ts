import { KeyExportOptions, KeyObject } from 'crypto';
import * as jose from 'jose';
import { JWT_CONF } from '../config';

async function newKeyPair(): Promise<{
  publicKey: KeyObject;
  privateKey: KeyObject;
}> {
  return await jose.generateKeyPair(JWT_CONF.alg, JWT_CONF.options);
}

const toStringOptions: KeyExportOptions<'pem'> = {
  type: 'pkcs1',
  format: 'pem',
};

export class MyJWT {
  private static KEYS: { publicKey: KeyObject; privateKey: KeyObject };
  private static KEYS_STRING: {
    publicKey: string | Buffer;
    privateKey: string | Buffer;
  };

  static async getKeys() {
    if (typeof MyJWT.KEYS === 'undefined') {
      MyJWT.KEYS = await newKeyPair();
    }
    return MyJWT.KEYS;
  }

  static async keysToString(options = toStringOptions) {
    if (typeof MyJWT.KEYS === 'undefined') await MyJWT.getKeys();
    if (typeof MyJWT.KEYS_STRING === 'undefined') {
      MyJWT.KEYS_STRING = {
        publicKey: MyJWT.KEYS.publicKey.export(options),
        privateKey: MyJWT.KEYS.privateKey.export(options),
      };
    }
    return MyJWT.KEYS_STRING;
  }

  static async sign(payload: any) {
    const alg = JWT_CONF.alg;
    return (await new jose.SignJWT(payload)).setProtectedHeader({ alg });
  }

  static verify = jose.jwtVerify;
}
