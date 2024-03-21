import React from 'react'
import './Playlist.scss'
import Track from '../Track/Track'

const Playlist = ({ playlist, alterFunction, text }) => {
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
      <ul>{playlistArr}</ul>
      <button>Save To Spotify</button>
    </div>
  )
}

export default Playlist