import React from 'react'
import './Track.scss'

const Track = ({ track }) => {
  return (
    <div className="track_container">
      <div>
        <h1>{track.name}</h1>
        <p>{track.artist}</p>
        <small>{track.album}</small>
      </div>

      <button>Add</button>
    </div>
  )
}

export default Track