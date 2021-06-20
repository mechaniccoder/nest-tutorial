import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';

@Module({
  /**
   * UserModule의 멤버인 UserService를 사용하기 위해
   * UserModule을 import해준 모습이다. 당연히 UserModule에서
   * UserService를 export해줘야 Auth모듈 내에서 이를 사용할 수 있다.
   *
   * 이를 static module binding이라 한다.
   */
  imports: [UserModule],
})
export class AuthModule {}
