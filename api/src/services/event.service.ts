import { Injectable, Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AddEventDto } from 'src/domain/dto/event/add-event.dto';
import { EventLocation } from 'src/domain/entities/event-location.entity';
import { Event } from 'src/domain/entities/event.entity';
import { IEventRepository } from 'src/domain/interfaces/repositories/ievent.repository';
import { IEventService } from 'src/domain/interfaces/services/ievent.service';
import { ITicketService } from 'src/domain/interfaces/services/iticket.service';
import { EventRepository } from 'src/infra/data/repositories/event.repository';
import { TicketGrpcClient } from 'src/infra/integration/grpc/services/ticket-grpc.client';

@Injectable()
export class EventService implements IEventService {
  constructor(
    @Inject(EventRepository)
    private readonly _eventRepository: IEventRepository,
    @Inject(TicketGrpcClient)
    private readonly _ticketService: ITicketService,
  ) {}

  async addAsync(eventDto: AddEventDto): Promise<Event> {
    const eventId = randomUUID();
    const ticket = await this._ticketService.getOneCodeAsync();
    const eventLocation = new EventLocation(
      eventId,
      eventDto.location.cep,
      eventDto.location.number,
      eventDto.location.extension,
    );

    const event = new Event(
      ticket.code,
      ticket.generatedWay,
      eventDto.position,
      eventDto.date,
      eventLocation,
      eventId,
    );

    await this._eventRepository.addAsync(event);

    return event;
  }

  async deleteAsync(eventId: string): Promise<void> {
    await this._eventRepository.deleteAsync(eventId);
  }

  async getAllAsync(): Promise<Event[]> {
    return await this._eventRepository.getAllAsync();
  }
}
