import { Event } from 'src/domain/entities/event.entity';

export interface IEventRepository {
  addAsync(event: Event): Promise<void>;
  deleteAsync(eventId: string): Promise<void>;
  getAllAsync(): Promise<Event[]>;
}
