"use client";
import { EventListBody } from "./event-list-body.component";
import { EventListHeader } from "./event-list-header.component";
import { useEventList } from "./useEventList";
import styles from "./event-list.module.css";
import { useEffect } from "react";

export function EventList() {
  const { events, handleRefresh } = useEventList();

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <>
      <div className={styles.content}>
        <button className={styles.button} onClick={() => handleRefresh()}>
          Atualizar
        </button>
        <table className={styles.table}>
          <EventListHeader />
          <EventListBody events={events} />
        </table>
      </div>
    </>
  );
}
