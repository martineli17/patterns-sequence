import { Module } from '@nestjs/common';
import { EventRepository } from 'src/infra/data/repositories/event.repository';
import { EventService } from 'src/services/event.service';
import { TicketModule } from './ticket.module';
import { EventController } from 'src/application/controllers/event.controller';

@Module({
  imports: [TicketModule],
  providers: [EventRepository, EventService],
  controllers: [EventController],
})
export class EventModule {}
