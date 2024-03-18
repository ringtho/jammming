import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from './components/Playlist/Playlist'

function App() {
  const [results, setResults] = useState([])
  const [playlist, setPlaylist] = useState([])

  const addToPlaylist = (song) => {
    if (!playlist.includes(song)) {
      setPlaylist(prev => [song, ...prev])
    }
    return
  }

  const removeFromPlaylist = (song) => {
    const newArr = playlist.filter((track) => {
      return track.id !== song.id 
    })
    setPlaylist(newArr)
  }

  return (
    <div className="App">
      <SearchBar setResults={setResults} />
      <main>
        <SearchResults
          results={results}
          alterFunction={addToPlaylist}
          text="Add"
        />
        <Playlist
          playlist={playlist}
          alterFunction={removeFromPlaylist}
          text="Remove"
        />
      </main>
    </div>
  )
}

export default App;
