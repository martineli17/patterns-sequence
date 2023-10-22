import { EventModel } from "./event-list.model";
import { EventListLine } from "./event-list-line.component";

type Props = {
  events: EventModel[];
};

export function EventListBody(props: Props) {
  return (
    <>
      <tbody>
        {props.events.map((event) => (
          <EventListLine event={event} key={event.id} />
        ))}
      </tbody>
    </>
  );
}
