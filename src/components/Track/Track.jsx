import React from 'react'
import './Track.scss'

const Track = ({ track, alterFunction, text }) => {
  const artistArr = track.artists.map((artist) => {
    return artist.name
  })

  return (
    <div className="track_container">
      <div>
        <h1>{track.name}</h1>
        <p>{track.artist}</p>
        <p>{artistArr.join(', ')}</p>
        <small>{track.album.name}</small>
      </div>
      <button onClick={() => alterFunction(track)}>{text}</button>
    </div>
  )
}

export default Track