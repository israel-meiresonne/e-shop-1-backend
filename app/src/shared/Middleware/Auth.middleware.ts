import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../../user/model/user/user.service';
import { MyJWT } from '../';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly unAuthMessage = 'Not authorized.';

  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = this.extractAuthorization(req);
    const decoded = await this.decodeToken(token);
    const user = this.userService.findById(decoded.id, HttpStatus.FORBIDDEN);
    req.body.user = user;
    next();
  }

  private extractAuthorization(req: Request): string {
    if (!req.headers?.authorization) {
      throw new HttpException(this.unAuthMessage, HttpStatus.UNAUTHORIZED, {
        cause: new Error('No Authorization token provided.'),
        description: '<error-code>',
      });
    }
    return req.headers?.authorization.split(' ')[1];
  }

  private async decodeToken(token: string) {
    let decoded: any;
    const keys = await MyJWT.getKeys();
    try {
      decoded = await MyJWT.verify(token, keys.publicKey);
    } catch (error) {
      throw new HttpException(this.unAuthMessage, HttpStatus.UNAUTHORIZED, {
        cause: new Error('Invalid Authorization token provided'),
        description: '<error-code>',
      });
    }
    return decoded;
  }
}
