import { Body, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: number) {
    // global validation pipe transform 속성을 설정해주면 자동으로 타입변환해준다.
    console.log(typeof id === 'number');
    return 'find one';
  }
}
