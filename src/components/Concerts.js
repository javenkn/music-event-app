import React, { useState, useContext } from "react";
import { DataContext } from "../App";
import useFilter from "../useFilter";

function filterByDate(data) {
  return data.sort(
    (a, b) => new Date(b.event_date_time) - new Date(a.event_date_time)
  );
}

function addZeroToTime(time) {
  if (Number(time) < 10) {
    return "0" + time;
  }
  return time;
}

const Concerts = () => {
  const [userInput, setUserInput] = useState("");
  const { concerts } = useContext(DataContext);
  const { data: filteredConcerts } = useFilter(concerts, userInput);
  return (
    <div>
      <h1>Concerts</h1>
      <input
        className="input-filter"
        value={userInput}
        placeholder="Find a concert"
        onChange={e => setUserInput(e.target.value)}
      />
      <ul className="venue-list">
        {filterByDate(filteredConcerts).map(concert => {
          const date = new Date(concert.event_date_time);
          const concertTime = date.toLocaleString("default", {
            dateStyle: "long",
            timeStyle: "short"
          });
          return (
            concert.name && (
              <li key={concert.slug} className="venue-info">
                <strong>{concert.name}</strong>
                <p>{concertTime}</p>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Concerts;
