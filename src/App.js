import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [events, setEvents] = useState([
    { title: "wash fish", id: 1 },
    { title: "milk cats", id: 2 },
    { title: "juggle", id: 31 },
  ]);

  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
      <button onClick={toggleModal}>Show Modal</button>
      {showModal && (
        <Modal toggleModal={toggleModal} btnText="Close">
          <h2>10% Off Couppon Code!!</h2>
          <p>Use the code NINJA10 at the checkout.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
