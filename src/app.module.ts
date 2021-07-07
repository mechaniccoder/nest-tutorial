import { BullModule } from '@nestjs/bull';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoConsumer } from './app.consumer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tmdghks9409151!',
      database: 'nest_tutorial',
      synchronize: true,
      autoLoadEntities: true,
    }),
    CacheModule.register({}),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'todo',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, TodoConsumer],
})
export class AppModule {}
