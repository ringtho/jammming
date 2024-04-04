import React from 'react'
import './Track.scss'

const Track = ({ track, alterFunction, text }) => {
  const artistArr = track.artists.map((artist) => {
    return artist.name
  })

  return (
    <div className="track_container">
      <div className="track_image">
        <img src={track.album.images[2].url} alt={track.name} />
      </div>
      <div>
        <h1 className="track_title">{track.name}</h1>
        <span className="track_album">
          {artistArr.join(', ')} . {track.album.name}
        </span>{' '}
      </div>
      {text === 'Add' ? (
        <i
          className="fa-solid fa-plus"
          onClick={() => alterFunction(track)}
          title="Add track to playlist"
        ></i>
      ) : (
        <i
          class="fa-solid fa-xmark remove"
          onClick={() => alterFunction(track)}
          title="Remove track from playlist"
        ></i>
      )}
      {/* <button onClick={() => alterFunction(track)}>{text}</button> */}
    </div>
  )
}

export default Track