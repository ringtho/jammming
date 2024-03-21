import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from './components/Playlist/Playlist'
import { getPlaylistTracks } from "./api/api";

function App() {
  const [results, setResults] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [userPlaylists, setUserPlaylists] = useState([])
  // const [tracks, setTracks] = useState([])

  // const access_token = JSON.parse(localStorage.getItem('Spotify')).access_token

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

  // const handleClick = (url) => {
  //   const getData = async () => {
  //     const data = await getPlaylistTracks(url, access_token)
  //     setTracks(data.items)
  //   }
  //   getData()
  // }

  // console.log(tracks)

  return (
    <div className="App">
      <SearchBar 
        setResults={setResults} 
        setUserPlaylists={setUserPlaylists} 
      />
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
          playlistName={playlistTitle}
          setPlaylistName={setPlaylistTitle}
        />
        {/* <ul>
          {userPlaylists.map((track) => {
            return (
              <div key={track.id}>
                <h1>{track.name}</h1>
                <small>{track.description}</small>
                <p style={{ color: 'red'}} onClick={() => handleClick(track.tracks.href)}>View Tracks</p>
              </div>
            )
          })}
        </ul> */}
      </main>
    </div>
  )
}

export default App;
