import React from "react";
import { Router, Link } from "@reach/router";
import useFetch from "./useFetch";
import "./App.css";
import Artists from "./components/Artists";
import Concerts from "./components/Concerts";
import Venues from "./components/Venues";

const API_ENDPOINT = "https://hl-candidate-events.herokuapp.com";
export const DataContext = React.createContext();

function App() {
  const { data: artists, isLoading: isArtistsLoading } = useFetch(
    API_ENDPOINT + "/artists"
  );
  const { data: concerts, isLoading: isConcertsLoading } = useFetch(
    API_ENDPOINT + "/concerts"
  );
  const { data: venues, isLoading: isVenuesLoading } = useFetch(
    API_ENDPOINT + "/venues"
  );

  if (isArtistsLoading || isConcertsLoading || isVenuesLoading)
    return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>🎶 Music Event App 🎵</h1>
        </Link>
        <nav>
          <Link to="concerts">Concerts</Link>
          <Link to="venues">Venues</Link>
        </nav>
      </header>
      <DataContext.Provider value={{ artists, concerts, venues }}>
        <main className="container">
          <Router>
            <Concerts path="concerts" />
            <Artists path="/*" />
            <Venues path="venues" />
          </Router>
        </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
