import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from './components/Playlist/Playlist'
import { getPlaylistTracks, getUserID, createPlaylist, addSongsToPlaylist } from "./api/api";

function App() {
  const [results, setResults] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [userPlaylists, setUserPlaylists] = useState([])
  const [message, setMessage] = useState('')
  // const [tracks, setTracks] = useState([])

  const { access_token } = JSON.parse(localStorage.getItem('Spotify'))

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

  const saveToPlaylist = async (e) => {
    e.preventDefault()
    if (playlistTitle) {
      const { id } = await getUserID(access_token)
      const data = { name: playlistTitle, desciption: 'Wonderful Playlist!' }
      const { id: playlistID } = await createPlaylist(id, data, access_token)

      const urisArray = playlist.map((track) => track.uri)
      const response = await addSongsToPlaylist(playlistID, urisArray, access_token)
      if (response.snapshot_id) {
        setMessage(`Successfully added ${urisArray.length} songs to ${playlistTitle}`)
        setPlaylist([])
      }
    }
    return 
  }

  // const handleClick = (url) => {
  //   const getData = async () => {
  //     const data = await getPlaylistTracks(url, access_token)
  //     setTracks(data.items)
  //   }
  //   getData()
  // }

  console.log(message)

  return (
    <div className="App">
      <SearchBar setResults={setResults} setUserPlaylists={setUserPlaylists} />
      <main>
        <SearchResults
          results={results}
          alterFunction={addToPlaylist}
          text="Add"
        />
        <div>
          {message && <h5>{message}</h5>}
          <Playlist
            playlist={playlist}
            alterFunction={removeFromPlaylist}
            text="Remove"
            playlistTitle={playlistTitle}
            setPlaylistTitle={setPlaylistTitle}
            saveToPlaylist={saveToPlaylist}
          />
        </div>

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
