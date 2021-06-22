import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
