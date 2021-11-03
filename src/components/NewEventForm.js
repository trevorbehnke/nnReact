import { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [event, setEvent] = useState();
  const [date, setDate] = useState();
  const [location, setLocation] = useState();

  const resetForm = () => {
    setEvent("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const theEvent = {
      title: event,
      date: date,
      location: location,
      id: Date.now(),
    };

    addEvent(theEvent);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Event Title: </span>
          <input
            type="text"
            onChange={(e) => setEvent(e.target.value)}
            value={event}
          />
        </label>
        <br />
        <label>
          <span>Event Date: </span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <label>
          <span>Location: </span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="mars">Mars</option>
            <option value="venus">Venus</option>
            <option value="jupiter">Jupiter</option>
          </select>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
