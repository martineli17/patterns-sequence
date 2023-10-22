import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Ticket } from 'src/domain/entities/ticket.entity';
import { ITicketRepository } from 'src/domain/interfaces/repositories/iticket.repository';

export class TicketRepository
  extends PrismaClient
  implements OnModuleInit, ITicketRepository
{
  async onModuleInit() {
    await this.$connect();
  }

  async addManyAsync(tickets: Ticket[]): Promise<void> {
    const ticketsToDataBase = tickets.map((ticket) => ({
      code: ticket.code,
      generatedWay: ticket.generatedWay,
      available: ticket.available,
    }));

    await this.ticket.createMany({
      data: ticketsToDataBase,
      skipDuplicates: true,
    });
  }

  async getOneCodeAsync(): Promise<string | null> {
    const ticket = await this.ticket.findFirst({
      where: {
        available: true,
      },
    });
    return ticket?.code;
  }

  async disableOneCodeAsync(code: string): Promise<void> {
    await this.ticket.update({
      where: {
        code: code,
      },
      data: {
        available: false,
      },
    });
  }
}
