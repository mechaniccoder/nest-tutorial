import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bull';
import { TodoConsumer } from './app.consumer';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(@InjectQueue('todo') private todoQueue: Queue, private todoConsumer: TodoConsumer) {}

  async createJob() {
    this.logger.debug('start to enqueue job to redis');
    const job = await this.todoQueue.add({
      text: 'learning nest',
    });

    return 'Hello World!';
  }
}
