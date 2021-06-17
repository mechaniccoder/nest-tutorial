import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateCatDto, ListAllCats, UpdateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query() query: ListAllCats): string {
    return 'find all cats';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'create cat';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
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
