import React, { useEffect, useState } from 'react'
import './SearchBar.scss'
import generateSpotifyAccessToken from '../../utils/generateSpotifyAccessToken'
import { getHashParams } from '../../utils/generateSpotifyAccessToken'
import { getPlaylists, searchResults } from '../../api/api'

const SearchBar = ({ setResults, setUserPlaylists }) => {
  const [searchText, setSearchText] = useState('')
  const [accessToken, setAccessToken] = useState({})

  const access_token = JSON.parse(localStorage.getItem('Spotify')).access_token
  const handleChange = ({ target }) => {
    setSearchText(target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!accessToken?.access_token) {
      generateSpotifyAccessToken()
    }
    const data = await searchResults(searchText, access_token)
    setResults(data)
  }

  useEffect(() => {
    const params = getHashParams()
    localStorage.setItem('Spotify', JSON.stringify(params))
    setAccessToken(params)
  }, [])

  useEffect(() => {
    if (accessToken.access_token) {
      const getData = async () => {
        const playlists = await getPlaylists(accessToken.access_token)
        setUserPlaylists(playlists.items)
      }
      getData()
    }
  }, [accessToken.access_token])

  return (
    <div className="searchbar_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for songs"
          aria-label="Search for songs"
          value={searchText}
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar