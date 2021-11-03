import React from "react";
import styles from "./EventList.module.css";

export default function EventList({ handleClick, events }) {
  return (
    <>
      {events.map((event) => (
        <div key={event.id} className={styles.card}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
