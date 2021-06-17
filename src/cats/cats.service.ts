import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private id = 0;
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    const newCat = {
      id: String(this.id++),
      ...cat,
    };
    this.cats.push(newCat);
  }

  findAll(limit: number): Cat[] {
    return this.cats.slice(0, limit);
  }

  getOne(id: string) {
    return this.cats.find((cat) => cat.id === id);
  }
}
