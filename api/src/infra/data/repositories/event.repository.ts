import { OnModuleInit, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Event } from 'src/domain/entities/event.entity';
import { IEventRepository } from 'src/domain/interfaces/repositories/ievent.repository';

@Injectable()
export class EventRepository
  extends PrismaClient
  implements OnModuleInit, IEventRepository
{
  onModuleInit() {
    this.$connect();
  }

  async addAsync(event: Event): Promise<void> {
    await this.$transaction([
      this.event.create({
        data: {
          code: event.code,
          generatedWay: event.generatedWay,
          date: event.date,
          position: event.position,
          id: event.id,
        },
      }),
      this.eventLocation.create({
        data: {
          cep: event.location.cep,
          number: event.location.number,
          eventId: event.location.eventId,
          extension: event.location.extension,
        },
      }),
    ]);
  }

  async deleteAsync(eventId: string): Promise<void> {
    await this.$transaction([
      this.eventLocation.delete({
        where: {
          eventId: eventId,
        },
      }),
      this.event.delete({
        where: {
          id: eventId,
        },
      }),
    ]);
  }

  async getAllAsync(): Promise<Event[]> {
    return (await this.event.findMany({
      select: {
        code: true,
        generatedWay: true,
        date: true,
        id: true,
        position: true,
        location: {
          select: {
            event: false,
            eventId: false,
            cep: true,
            extension: true,
            number: true,
          },
        },
      },
    })) as Event[];
  }
}
