import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createOne(@Body() user: CreateUserDto): Promise<User> {
    const newUser = await this.userService.createOne(user);
    return newUser;
  }
}
