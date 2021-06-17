import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllCats, UpdateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';
import { ValidationPipe } from './pipe/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(@Query() query: ListAllCats): Promise<Cat[] | string> {
    console.log(query);
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  getOne(@Param('id', new DefaultValuePipe(1), ParseIntPipe) id: number) {
    return `get ${id} cat`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    return `update ${id} cat`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `delete ${id}`;
  }
}
