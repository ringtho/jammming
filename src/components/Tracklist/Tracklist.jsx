import React from 'react'
import './Tracklist.scss'
import Track from '../Track/Track'

const Tracklist = ({ results, alterFunction, text }) => {
  const resultsArr = results.map((track) => {
    return (
      <li key={track.id}>
        <Track track={track} alterFunction={alterFunction} text={text} />
      </li>
    )
  })
  return <ul>{resultsArr}</ul>
}

export default Tracklist