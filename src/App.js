import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from './components/Playlist/Playlist'

function App() {
  const [results, setResults] = useState([])
  const [playlist, setPlaylist] = useState([])


  return (
    <div className="App">
      <SearchBar setResults={setResults} />
      <main>
        <SearchResults results={results} />
        <Playlist playlist={playlist} />
      </main>
    </div>
  )
}

export default App;
