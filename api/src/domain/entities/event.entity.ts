import { randomUUID } from 'crypto';
import { EventLocation } from './event-location.entity';

export class Event {
  readonly id: string;
  readonly code: string;
  readonly position: string;
  readonly date: Date;
  readonly generatedWay: number;
  readonly location: EventLocation;

  constructor(
    code: string,
    generatedWay: number,
    position: string,
    date: Date,
    location: EventLocation,
    id?: string,
  ) {
    this.id = id ?? randomUUID();
    this.code = code;
    this.generatedWay = generatedWay;
    this.position = position;
    this.date = date;
    this.location = location;
  }
}
