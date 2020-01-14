import React, { useState } from "react";
import { Link } from "@reach/router";
import useFilter from "../useFilter";
import "./ArtistList.css";
import defaultImg from "../default-artist.png";

const Artist = React.memo(artist => {
  // checks if artist logo src is available
  const artistLogoExists = artist.logo.slice(-9) !== "undefined";
  return (
    <Link to={artist.id} hello="hello" className="artist-wrapper">
      <div
        className="artist-box"
        style={{
          backgroundImage: artistLogoExists
            ? `url(http://${artist.logo})`
            : `url(${defaultImg})`
        }}
      >
        <h3>{artist.name}</h3>
      </div>
    </Link>
  );
});

const ArtistList = ({ artists }) => {
  const [userInput, setUserInput] = useState("");
  const { data } = useFilter(artists, userInput);
  return (
    <div className="artist-container">
      <div className="input-wrapper">
        <input
          className="input-filter artist"
          value={userInput}
          placeholder="Find an artist"
          onChange={e => setUserInput(e.target.value)}
        />
      </div>
      <div className="artist-grid">
        {data.map(artist => (
          <Artist key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
