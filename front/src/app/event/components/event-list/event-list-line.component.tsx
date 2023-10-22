import { eventNames } from "process";
import { EventListActions } from "./event-list-actions.component";
import { EventModel } from "./event-list.model";
import styles from "./event-list.module.css";

type Props = {
  event: EventModel;
};

export function EventListLine(props: Props) {
  return (
    <tr>
      <td className={styles.td}>{props.event.code}</td>
      <td className={styles.td}>{props.event.date}</td>
      <td className={styles.td}>{props.event.position}</td>
      <td className={styles.td}>{props.event.location.cep}</td>
      <td className={styles.td}>
        {props.event.location.number}
        {props.event.location.extension
          ? ` (${props.event.location.extension})`
          : ""}
      </td>
      <td className={styles.td}>{props.event.generatedWay}</td>
      <td className={styles.td}>
        <EventListActions id={props.event.id} />
      </td>
    </tr>
  );
}
