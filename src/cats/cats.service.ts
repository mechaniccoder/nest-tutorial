import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private id = 0;
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    throw new NotFoundException('Failed to create new cat');
    // const newCat = {
    //   id: String(this.id++),
    //   ...cat,
    // };
    // this.cats.push(newCat);
  }

  findAll(): Cat[] | string {
    return [
      {
        age: 10,
        id: '1',
        breed: 'dd',
        name: 'sh',
      },
    ];
  }

  getOne(id: string) {
    return this.cats.find((cat) => cat.id === id);
  }
}
