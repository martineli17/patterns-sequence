import { Module } from '@nestjs/common';
import { EventModule } from './infra/crosscuting/modules/event.module';

@Module({
  imports: [EventModule],
})
export class AppModule {}
