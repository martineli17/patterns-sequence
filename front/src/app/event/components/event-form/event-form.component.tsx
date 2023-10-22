"use client";
import styles from "./event-form.module.css";
import { useEventFormRefs } from "./useEventForm";

export function EventForm() {
  const { handle, ...refs } = useEventFormRefs();

  return (
    <>
      <div className={styles.content}>
        <section className={styles.section01}>
          <div className={styles.flexColumn}>
            <label
              ref={refs.labelWhenRef}
              className={styles.label}
              htmlFor="event-form-when"
            >
              Quando?
            </label>
            <input
              ref={refs.inputWhenRef}
              className={styles.input}
              id="event-form-when"
              type="datetime-local"
            />
          </div>
          <div className={styles.flexColumn}>
            <label
              ref={refs.labelPositionRef}
              className={styles.label}
              htmlFor="event-form-position"
            >
              Posição
            </label>
            <input
              ref={refs.inputPositionRef}
              className={styles.input}
              id="event-form-position"
              type="text"
            />
          </div>
        </section>
        <section className={styles.section02}>
          <div className={styles.flexColumn}>
            <label
              ref={refs.labelCepRef}
              className={styles.label}
              htmlFor="event-form-cep"
            >
              CEP
            </label>
            <input
              ref={refs.inputCepRef}
              className={styles.input}
              id="event-form-cep"
              placeholder="00000-000"
              type="text"
            />
          </div>
          <div className={styles.flexColumn}>
            <label
              ref={refs.labelNumberRef}
              className={styles.label}
              htmlFor="event-form-number"
            >
              Número
            </label>
            <input
              ref={refs.inputNumberRef}
              className={styles.input}
              id="event-form-number"
              type="number"
            />
          </div>
          <div className={styles.flexColumn}>
            <label
              ref={refs.labelExtensionRef}
              className={styles.label}
              htmlFor="event-form-extesion"
            >
              Complemento (opcional)
            </label>
            <input
              ref={refs.inputExtensionRef}
              className={styles.input}
              id="event-form-extesion"
              type="text"
            />
          </div>
        </section>
        <div className={styles.flexColumn}>
          <button onClick={handle} className={styles.button}>
            Gerar ticket
          </button>
        </div>
      </div>
    </>
  );
}
