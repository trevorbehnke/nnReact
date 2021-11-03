import React from "react";

export default function EventList({ handleClick, events }) {
  return (
    <>
      {events.map((event) => (
        <React.Fragment key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete</button>
        </React.Fragment>
      ))}
    </>
  );
}
