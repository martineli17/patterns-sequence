import { Inject, Injectable, Scope } from '@nestjs/common';
import { Ticket } from 'src/domain/entities/ticket.entity';
import { ITicketRepository } from 'src/domain/interfaces/repositories/iticket.repository';
import { ITicketService } from 'src/domain/interfaces/services/iticket.service';
import { TicketGeneratedWay } from 'src/domain/types/ticket-generated-way.enum';
import { TicketRepository } from 'src/infra/data/repositories/ticket.repository';

@Injectable({ scope: Scope.TRANSIENT })
export class TicketService implements ITicketService {
  constructor(
    @Inject(TicketRepository)
    private readonly _ticketRepository: ITicketRepository,
  ) {}

  async generateManyAsync(
    ticketGeneratedWay: TicketGeneratedWay,
  ): Promise<Ticket[]> {
    const tickets: Ticket[] = [];
    for (var index = 0; index < 1; index++) {
      let randomName = (Math.random() + 1)
        .toString(36)
        .substring(7)
        .toUpperCase();

      const ticket = new Ticket(ticketGeneratedWay, true);
      ticket.generateCode(randomName);
      tickets.push(ticket);
    }

    await this._ticketRepository.addManyAsync(tickets);
    return tickets;
  }

  async generateOnDemandAsync(
    ticketGeneratedWay: TicketGeneratedWay,
  ): Promise<Ticket> {
    let randomName = (Math.random() + 1)
      .toString(36)
      .substring(7)
      .toUpperCase();

    const ticket = new Ticket(ticketGeneratedWay, false);
    ticket.generateCode(randomName);

    await this._ticketRepository.addManyAsync([ticket]);

    return ticket;
  }

  async getOneCodeAsync(): Promise<string> {
    const code = await this._ticketRepository.getOneCodeAsync();

    if (code) {
      await this._ticketRepository.disableOneCodeAsync(code);
    }
    return code;
  }
}
