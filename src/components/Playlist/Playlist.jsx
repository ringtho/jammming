import React from 'react'
import './Playlist.scss'
import Track from '../Track/Track'

const Playlist = ({ playlist }) => {
  const playlistArr = playlist.map((track) => {
    return (
      <li key={track.id}>
        <Track track={track} />
      </li>
    )
  })
  return (
    <div>
      <h1>Playlist</h1>
      <ul>{playlistArr}</ul>
      <button>Save To Spotify</button>
    </div>
  )
}

export default Playlist