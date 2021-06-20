import { MiddlewareConsumer, Module, NestModule, Options } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { createConnection } from 'net';
import { async } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { ValidationPipe } from './cats/pipe/validation.pipe';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [CatsModule, UserModule, AuthModule, ConfigModule.register()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: 'ASYNC_CONNECTION',
      // ASYNC_CONNECTION 토큰을 가지고 있는 provider들은 factory 함수가 connection을 resolve할 때 까지 이를 instantiating하지 않는다.
      useFactory: async () => {
        const connection = await createConnection({});
        return connection;
      },
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
