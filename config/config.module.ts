import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({})
export class ConfigModule {
  static register(options): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options, // provider는 서비스 클래스뿐만이 아닌 value도 가능하다.
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
