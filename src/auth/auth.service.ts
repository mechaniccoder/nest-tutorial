import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  // forwardref를 통해 circular dependency를 resolve하자.
  constructor(@Inject(forwardRef(() => UserService)) private userService: UserService) {}
}
