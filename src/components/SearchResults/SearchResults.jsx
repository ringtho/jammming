import React from 'react'
import './SearchResults.scss'
import Track from '../Track/Track'

const SearchResults = ({ results, alterFunction, text }) => {
  const resultsArr = results.map(track => {
    return (
      <li key={track.id}>
        <Track track={track} alterFunction={alterFunction} text={text} />
      </li>
    )
  })
  return (
    <div className='searchResults_container'>
      <h2>Search Results</h2>
      <ul>
        {resultsArr}
      </ul>
    </div>
  )
}

export default SearchResults