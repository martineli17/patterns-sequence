import { deleteAsync, getAllEventAsync } from "@/services/event.service";
import { useState } from "react";
import { EventModel } from "./event-list.model";

export function useEventList() {
  const [events, setEvents] = useState<EventModel[]>([]);

  async function handleRefresh(): Promise<void> {
    const response = (await getAllEventAsync()) ?? [];

    const eventsModel: EventModel[] = response.map((event) => ({
      ...event,
      date: new Date(event.date).toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      generatedWay: event.generatedWay === 1 ? "Automático" : "Sob Demanda",
    }));

    setEvents(eventsModel);
  }

  async function handleRemove(id: string) {
    await deleteAsync(id);
  }

  return { events, handleRefresh, handleRemove };
}
