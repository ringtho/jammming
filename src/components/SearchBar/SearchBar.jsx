import React, { useState } from 'react'
import './SearchBar.scss'
import { data } from '../utils/data'

const SearchBar = ({ setResults }) => {

  const [searchText, setSearchText] = useState('')

  const handleChange = ({ target }) => {
    setSearchText(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setResults(data)
  }

  return (
    <div className='searchbar_container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for songs"
          aria-label="Search for songs"
          value={searchText}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar