import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('todo')
export class TodoConsumer {
  private readonly logger = new Logger(TodoConsumer.name);

  @Process()
  async getJob(job: Job<unknown>) {
    // console.log(job);
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug('process job from redis');
    console.log(`Processing job ${job.id} of type ${job.name} with data ${job.data}...`);
  }
}
