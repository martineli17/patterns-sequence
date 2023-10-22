import { Ticket } from 'src/domain/entities/ticket.entity';
import { TicketGeneratedWay } from 'src/domain/types/ticket-generated-way.enum';

export interface ITicketService {
  generateOnDemandAsync(
    ticketGeneratedWay: TicketGeneratedWay,
  ): Promise<Ticket>;
  generateManyAsync(ticketGeneratedWay: TicketGeneratedWay): Promise<Ticket[]>;
  getOneCodeAsync(): Promise<string>;
}
