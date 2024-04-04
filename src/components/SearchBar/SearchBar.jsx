import React, { useState } from 'react'
import './SearchBar.scss'
import { searchResults } from '../../api/api'
import useSpotifyAuth from '../../hooks/useSpotifyAuth'
import toast from 'react-hot-toast'

const SearchBar = ({ setResults }) => {
  const [searchText, setSearchText] = useState('')
  const clientId = process.env.REACT_APP_CLIENT_ID
  const redirectUri = process.env.REACT_APP_REDIRECT_URI

  // custom hook to manage Spotify auth
  const accessToken = useSpotifyAuth(clientId, redirectUri)

  const handleChange = ({ target }) => {
    setSearchText(target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!accessToken) {
      toast.error('No access token available.')
      return
    }
    try {
      const data = await searchResults(searchText)
      setResults(data)
      setSearchText('')
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="searchbar_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for songs"
          aria-label="Search for songs"
          value={searchText}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
