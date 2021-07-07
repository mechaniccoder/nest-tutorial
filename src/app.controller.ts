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

  @Get()
  async createJob(): Promise<string> {
    this.appService.createJob();
    return 'create job';
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
