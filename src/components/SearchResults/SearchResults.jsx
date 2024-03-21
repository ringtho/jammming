import React from 'react'
import './SearchResults.scss'
import Tracklist from '../Tracklist/Tracklist'

const SearchResults = ({ results, alterFunction, text }) => {

  return (
    <div className="searchResults_container">
      <h2>Search Results</h2>
      <Tracklist 
        results={results} 
        alterFunction={alterFunction} 
        text={text} 
      />
    </div>
  )
}

export default SearchResults