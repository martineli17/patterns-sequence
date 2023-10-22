import styles from "./event-tittle.module.css";

export function EventTitle() {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.h1}>Eventos</h1>
        <div className={styles.divisor} />
      </div>
    </>
  );
}
