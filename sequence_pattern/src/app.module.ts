import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TicketModule } from './infra/crosscuting/modules/ticket.module';

@Module({
  imports: [TicketModule, ScheduleModule.forRoot()],
})
export class AppModule {}
