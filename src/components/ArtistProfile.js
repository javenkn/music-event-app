import React from "react";
import defaultImg from "../default-artist.png";
import "./ArtistProfile.css";

const ArtistProfile = ({ artistId, artists }) => {
  const [artist] = artists.filter(artist => artist.id === artistId);
  const artistLogoExists = artist.logo.slice(-9) !== "undefined";
  return (
    <div className="artist-profile-container">
      <img
        src={artistLogoExists ? artist.logo : defaultImg}
        alt={artist.name}
      ></img>
      <div className="artist-info">
        <label>Artist</label>
        <h1>{artist.name}</h1>
        <label>Bio</label>
        <p className="bio">{artist.bio || "N/A"}</p>
        <label>Genres</label>
        <div>
          {artist.genres.length
            ? artist.genres.map(genre => <span>{genre}</span>)
            : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
