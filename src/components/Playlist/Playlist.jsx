import React from 'react'
import './Playlist.scss'
import Track from '../Track/Track'
import PlaylistName from '../PlaylistName/PlaylistName'

const Playlist = ({ playlist, alterFunction, text, playlistName, setPlaylistName }) => {
  const playlistArr = playlist.map((track) => {
    return (
      <li key={`Track ${track.id}`}>
        <Track track={track} alterFunction={alterFunction} text={text} />
      </li>
    )
  })

  return (
    <div>
      <h1>Playlist</h1>
      <PlaylistName 
        playlistName={playlistName} 
        setPlaylistName={setPlaylistName} 
      />
      <ul>{playlistArr}</ul>
      <button>Save To Spotify</button>
    </div>
  )
}

export default Playlist