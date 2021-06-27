import {
  Body,
  ClassSerializerInterceptor,
  Get,
  Param,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ExpressAdapter, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Expose } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { diskStorage } from 'multer';

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    const rr = Math.random().toString(16);
    cb(null, rr + '.png');
  },
});
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

  @Post('file')
  @UseInterceptors(
    FilesInterceptor('icon', 10, {
      storage,
    }),
  )
  uploadFile(@UploadedFiles() files) {
    return 'file uploaded';
  }
}
