import { EventLocationDto } from "./event-location.dto";

export type EventDto = {
  id: string;
  code: string;
  position: string;
  date: Date;
  generatedWay: number;
  location: EventLocationDto;
};
