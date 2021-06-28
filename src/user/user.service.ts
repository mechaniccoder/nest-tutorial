import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private connection: Connection,
    private httpService: HttpService,
  ) {}

  async createOne(user: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  findAll() {
    return this.httpService.get('http://localhost:3000/user');
  }
}
