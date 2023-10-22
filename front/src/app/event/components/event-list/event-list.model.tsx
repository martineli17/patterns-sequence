import { EventLocationDto } from "@/dtos/event-location.dto";

export type EventModel = {
  id: string;
  code: string;
  position: string;
  date: string;
  generatedWay: string;
  location: EventLocationDto;
};
