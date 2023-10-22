import { TicketDto } from 'src/domain/dto/ticket/ticket.dto';

export interface ITicketService {
  getOneCodeAsync(): Promise<TicketDto>;
}
