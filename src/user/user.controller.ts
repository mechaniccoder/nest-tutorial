import { Body, ClassSerializerInterceptor, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Expose } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createOne(@Body() user: CreateUserDto): Promise<User> {
    const newUser = await this.userService.createOne(user);
    return newUser;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    // global validation pipe transform 속성을 설정해주면 자동으로 타입변환해준다.
    const user = await this.userService.findOne(id);
    return user;
  }
}
