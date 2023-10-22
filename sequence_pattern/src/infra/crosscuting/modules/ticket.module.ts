import { Module } from '@nestjs/common';
import { TicketGrpc } from 'src/application/grpc/ticket.grpc';
import { TicketScheduler } from 'src/application/schedulers/ticket.scheduler';
import { TicketRepository } from 'src/infra/data/repositories/ticket.repository';
import { TicketService } from 'src/services/ticket.service';

@Module({
  providers: [TicketService, TicketRepository, TicketScheduler],
  controllers: [TicketGrpc],
})
export class TicketModule {}
