import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService, @Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @CacheKey('hello')
  @CacheTTL(10)
  @Get()
  async getHello(): Promise<string> {
    const value = await this.cacheManager.get('apiKey');
    if (!value) {
      await this.cacheManager.set(
        'apiKey',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        {
          ttl: 1000,
        },
      );
      return 'key generated';
    }
    return value as string;
  }

  @Get('cookie')
  setCookie(@Res({ passthrough: true }) res: Response) {
    res.cookie('cookie', 'choco', {
      maxAge: 300000,
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
    });
    return 'hi';
  }
}
