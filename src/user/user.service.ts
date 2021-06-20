import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  // forwardref를 통해 circular dependency를 resolve하자.
  constructor(@Inject(forwardRef(() => AuthService)) private authService: AuthService) {}
}
