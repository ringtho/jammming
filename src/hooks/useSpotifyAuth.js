import { useEffect, useState } from 'react';

const useSpotifyAuth = (clientId, redirectUri) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('access_token')
  )
  const [tokenExpirationTime, setTokenExpirationTime] = useState(
    parseInt(localStorage.getItem('token_expiration_time'), 10)
  )

  const generateRandomString = (length) => {
    let text = ''
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }

  const redirectToSpotifyAuth = () => {
    const state = generateRandomString(16)
    localStorage.setItem('spotify_auth_state', state)
    const scope =
      'user-read-private user-read-email playlist-modify-public playlist-read-private'

    let url = 'https://accounts.spotify.com/authorize'
    url += '?response_type=token'
    url += `&client_id=${encodeURIComponent(clientId)}`
    url += `&scope=${encodeURIComponent(scope)}`
    url += `&redirect_uri=${encodeURIComponent(redirectUri)}`
    url += `&state=${encodeURIComponent(state)}`

    window.location.assign(url)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const currentTime = new Date().getTime()
    if (accessToken && tokenExpirationTime > currentTime) {
      console.log('Token is valid, no action needed.')
      return
    }

    const hashParams = new URLSearchParams(window.location.hash.substring(1))
    const urlAccessToken = hashParams.get('access_token')
    const expiresIn = hashParams.get('expires_in')

    if (urlAccessToken) {
      const expirationTime = currentTime + parseInt(expiresIn, 10) * 1000
      localStorage.setItem('access_token', urlAccessToken)
      localStorage.setItem('token_expiration_time', expirationTime.toString())

      setAccessToken(urlAccessToken)
      setTokenExpirationTime(expirationTime)
      window.location.hash = ''
    } else if (!urlAccessToken || currentTime >= tokenExpirationTime) {
      redirectToSpotifyAuth()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, tokenExpirationTime])


  useEffect(() => {
    const checkTokenExpiration = () => {
      // console.log('Checking.....')
      const currentTime = new Date().getTime()
      // console.log(`Current Time: ${currentTime}`)
      // console.log(`Expiration Time: ${tokenExpirationTime}`)
      // console.log(`Difference: ${(tokenExpirationTime - currentTime)/1000}`)
      if (currentTime >= tokenExpirationTime - 120 * 1000) {
        redirectToSpotifyAuth()
      }
    }
    // Check every minute
    const interval = setInterval(checkTokenExpiration, 60000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenExpirationTime])

  return accessToken
}

export default useSpotifyAuth
