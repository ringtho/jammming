import { useState } from "react"
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from './components/Playlist/Playlist'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { getUserID, createPlaylist, addSongsToPlaylist } from "./api/api"
import StartMessage from "./components/StartMessage/StartMessage"

const App = () => {
  const [results, setResults] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [playlistTitle, setPlaylistTitle] = useState('')
  const [message, setMessage] = useState('')

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
      const { id } = await getUserID()
      const data = { name: playlistTitle, desciption: 'Wonderful Playlist!' }
      const { id: playlistID } = await createPlaylist(id, data)

      const urisArray = playlist.map((track) => track.uri)
      const response = await addSongsToPlaylist(playlistID, urisArray)
      if (response.snapshot_id) {
        setMessage(`Successfully added ${urisArray.length} songs to ${playlistTitle}`)
        setPlaylist([])
      }
    }
    return 
  }

  return (
    <div className="app">
      <Header />
      <main className="app_wrapper">
        <SearchBar setResults={setResults} />
        <section className="app_container">
          {results.length > 1 && (
            <SearchResults
              results={results}
              alterFunction={addToPlaylist}
              text="Add"
            />
          )}
          {playlist.length > 0 && (
            <div>
              <Playlist
                playlist={playlist}
                alterFunction={removeFromPlaylist}
                text="Remove"
                playlistTitle={playlistTitle}
                setPlaylistTitle={setPlaylistTitle}
                saveToPlaylist={saveToPlaylist}
              />
            </div>
          )}
          {results.length === 0 && playlist.length === 0 && <StartMessage />}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
