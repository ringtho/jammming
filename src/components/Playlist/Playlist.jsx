import React from 'react'
import './Playlist.scss'
import Tracklist from '../Tracklist/Tracklist'
import PlaylistName from '../PlaylistName/PlaylistName'

const Playlist = ({ 
  playlist, 
  alterFunction, 
  text, 
  playlistName, 
  setPlaylistName 
}) => {

  return (
    <div>
      <h1>Playlist</h1>
      <PlaylistName
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
      />
      <Tracklist results={playlist} alterFunction={alterFunction} text={text} />
      <button>Save To Spotify</button>
    </div>
  )
}

export default Playlist