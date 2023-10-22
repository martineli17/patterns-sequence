"use client";
import { useEventList } from "./useEventList";
import styles from "./event-list.module.css";

type Props = {
  id: string;
};

export function EventListActions(props: Props) {
  const { events, handleRemove } = useEventList();

  return (
    <>
      <button
        onClick={() => handleRemove(props.id)}
        className={styles.buttonRemoveAction}
      >
        Remover
      </button>
    </>
  );
}
