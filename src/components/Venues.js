import React, { useState, useContext } from "react";
import { DataContext } from "../App";
import "./Venues.css";
import useFilter from "../useFilter";

const Venues = () => {
  const [userInput, setUserInput] = useState("");
  const { venues } = useContext(DataContext);
  const { data: filteredVenues } = useFilter(venues, userInput);

  return (
    <div>
      <h1>Venues</h1>
      <input
        className="input-filter"
        value={userInput}
        placeholder="Search for a venue"
        onChange={e => setUserInput(e.target.value)}
      />
      <ul className="venue-list">
        {filteredVenues.map(venue => (
          <li key={venue.slug} className="venue-info">
            <strong>{venue.name}</strong>
            <p>{venue.formatted_address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Venues;
