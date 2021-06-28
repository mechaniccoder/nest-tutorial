import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
