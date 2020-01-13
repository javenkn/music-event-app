import React, { useContext } from "react";
import { Router } from "@reach/router";
import { DataContext } from "../App";
import ArtistList from "./ArtistList";
import ArtistProfile from "./ArtistProfile";

const Artists = () => {
  const { artists } = useContext(DataContext);
  return (
    <div>
      <h1>Artists</h1>
      <Router>
        <ArtistList path="/" artists={artists} />
        <ArtistProfile path=":artistId" artists={artists} />
      </Router>
    </div>
  );
};

export default Artists;
