import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'error', 'warn'],
  });
  app.useGlobalPipes(new ValidationPipe()); // auto-validation
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
