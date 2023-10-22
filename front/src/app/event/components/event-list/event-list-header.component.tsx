import styles from "./event-list.module.css";

export function EventListHeader() {
  return (
    <>
      <thead>
        <tr>
          <th className={styles.th}>Ticket</th>
          <th className={styles.th}>Data</th>
          <th className={styles.th}>Posição</th>
          <th className={styles.th}>CEP</th>
          <th className={styles.th}>Número</th>
          <th className={styles.th}>Método de geração</th>
          <th className={styles.th}>Ação</th>
        </tr>
      </thead>
    </>
  );
}
