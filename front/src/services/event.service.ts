import { AddEventDto } from "@/dtos/event-request.dto";
import { EventDto } from "@/dtos/event.dto";

export async function addEventAsync(request: AddEventDto): Promise<EventDto> {
  const response = await fetch("http://localhost:3001/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  const data = (await response.json()) as EventDto;
  return data;
}

export async function deleteAsync(id: string): Promise<void> {
  await fetch(`http://localhost:3001/events/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getAllEventAsync(): Promise<EventDto[]> {
  const response = await fetch("http://localhost:3001/events", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json()).data;
  return data as EventDto[];
}
