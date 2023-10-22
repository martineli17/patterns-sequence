import { Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ITicketService } from 'src/domain/interfaces/services/iticket.service';
import { TicketGeneratedWay } from 'src/domain/types/ticket-generated-way.enum';
import { TicketService } from 'src/services/ticket.service';

@Injectable()
export class TicketScheduler {
  constructor(
    @Inject(TicketService) private readonly _ticketService: ITicketService,
  ) {}
  @Cron('*/30 * 7-23 * * *')
  async handle(): Promise<void> {
    await this._ticketService.generateManyAsync(TicketGeneratedWay.AUTOMATIC);
  }
}
