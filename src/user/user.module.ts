import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  /**
   * provider는 기본적으로 모듈에 의해 encapsulating되어있다.
   * 따라서, 다른 모듈에서 이 모듈의 멤버들을 사용하기 위해서
   * exports로 provider를 내보내줘야 한다.
   */
  exports: [UserService],
})
export class UserModule {}
