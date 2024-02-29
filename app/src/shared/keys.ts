import { KeyObject } from 'crypto';
import * as jose from 'jose';
import { JWT_CONF } from '../config';

const newKeyPair = async (): Promise<{
  publicKey: KeyObject;
  privateKey: KeyObject;
}> => {
  return await jose.generateKeyPair(JWT_CONF.alg, JWT_CONF.options);
};

async function newAsymmetricKeys(): Promise<{
  publicKey: string | Buffer;
  privateKey: string | Buffer;
}> {
  const keys = await newKeyPair();
  const publicKey = keys.publicKey.export({
    type: 'pkcs1',
    format: 'pem',
  });
  const privateKey = keys.privateKey.export({
    type: 'pkcs1',
    format: 'pem',
  });
  return { publicKey, privateKey };
}

let KEYS: { publicKey: string | Buffer; privateKey: string | Buffer };
export async function getKeys() {
  if (typeof KEYS === 'undefined') {
    KEYS = await newAsymmetricKeys();
  }
  return KEYS;
}
