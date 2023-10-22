import { Ticket } from 'src/domain/entities/ticket.entity';

export interface ITicketRepository {
  addManyAsync(tickets: Ticket[]): Promise<void>;
  getOneCodeAsync(): Promise<string | null>;
  disableOneCodeAsync(code: string): Promise<void>;
}
