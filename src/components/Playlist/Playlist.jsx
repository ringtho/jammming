import React from 'react'
import './Playlist.scss'
import Tracklist from '../Tracklist/Tracklist'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'

const Playlist = ({ 
  playlist, 
  alterFunction, 
  text, 
  playlistTitle, 
  setPlaylistTitle 
}) => {

  return (
    <div>
      <h1>Playlist</h1>
      <PlaylistTitle
        playlistTitle={playlistTitle}
        setPlaylistTitle={setPlaylistTitle}
      />
      <Tracklist 
        results={playlist} 
        alterFunction={alterFunction} 
        text={text} 
      />
      <button>Save To Spotify</button>
    </div>
  )
}

export default Playlist