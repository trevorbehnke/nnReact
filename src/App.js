import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [events, setEvents] = useState([]);

  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });

    setShowModal(false);
  };

  let subtitle = "Make all your dreams come true...";

  return (
    <div className="App">
      <Title title="Some Super Duper Events!" subtitle={subtitle} />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <br />
      {showModal && (
        <Modal btnText="Close" isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>Add Event</button>
    </div>
  );
}

export default App;
