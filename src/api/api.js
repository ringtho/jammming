const BASEURL = 'https://api.spotify.com/v1'

const getHeaders = (access_token) => {
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + access_token,
    }
}

export const getPlaylists = async (access_token) => {
    const response = await fetch(`${BASEURL}/me/playlists`, 
    { headers: getHeaders(access_token) })
    const playlist = await response.json()
    return playlist
}

export const getPlaylistTracks = async (url, access_token) => {
    const response = await fetch(url, {headers: getHeaders(access_token)})
    const tracks = await response.json()
    return tracks
}

export const searchResults = async (searchParam, access_token) => {
    const type = ['track']
    const url = `${BASEURL}/search?q=${searchParam}&type=${type}`
    const response = await fetch(url, {
      headers: getHeaders(access_token),
    })
    const searchResult = await response.json()
    return searchResult?.tracks?.items
}

export const getUserID = async (access_token) => {
    const url = `${BASEURL}/me`
    const response = await fetch(url, {headers: getHeaders(access_token)})
    const userID = await response.json()
    return userID
}

export const createPlaylist = async (userID, data, access_token) => {
    const url = `${BASEURL}/users/${userID}/playlists`
    const response = await fetch(url, 
        { method: "POST", headers: getHeaders(access_token), body: JSON.stringify(data) })
    const playlist = await response.json()
    return playlist
}

export const addSongsToPlaylist = async (playlistId, data, access_token) => {
    const url = `${BASEURL}/playlists/${playlistId}/tracks`
    const response = await fetch(url, {
      method: 'POST',
      headers: getHeaders(access_token),
      body: JSON.stringify(data),
    })
    const playlist = await response.json()
    return playlist
}