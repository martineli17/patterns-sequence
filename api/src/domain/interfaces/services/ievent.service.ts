import { AddEventDto } from 'src/domain/dto/event/add-event.dto';
import { Event } from 'src/domain/entities/event.entity';

export interface IEventService {
  addAsync(eventDto: AddEventDto): Promise<Event>;
  deleteAsync(eventId: string): Promise<void>;
  getAllAsync(): Promise<Event[]>;
}
