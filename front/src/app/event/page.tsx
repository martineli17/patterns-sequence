import { EventForm } from "./components/event-form/event-form.component";
import { EventList } from "./components/event-list/event-list.component";
import { EventTitle } from "./components/event-tittle/event-title.component";

export default function SequencePage() {
  return (
    <>
      <EventTitle />
      <EventForm />
      <EventList />
    </>
  );
}
