import { Inject, Injectable } from '@nestjs/common';
import path from 'path';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject('CONFIG_OPTIONS') private options) {
    const options = { folder: './config' };

    const filePath = path.resolve(__dirname, '../', options.folder);
  }
}
