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
        <small className="track_album">
          <span className='track_text'>{artistArr.join(', ')}</span> {track.album.name}
        </small>{' '}
      </div>
      {text === 'Add' ? (
        <i
          className="fa-solid fa-plus"
          onClick={() => alterFunction(track)}
          title="Add track to playlist"
        ></i>
      ) : (
        <i
          className="fa-solid fa-xmark remove"
          onClick={() => alterFunction(track)}
          title="Remove track from playlist"
        ></i>
      )}
    </div>
  )
}

export default Track