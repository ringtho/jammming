import generateRandomString from "./generateRandomString"


/**
 * Obtains parameters from the hash of the URL
 * @return Object
 */
export function getHashParams() {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

const generateSpotifyAccessToken = () => {
    const stateKey = 'spotify_auth_state'
    const client_id = 'c57ab5cd9b5247e09b2f93591e9ead00' // Your client id
    const redirect_uri = 'http://localhost:3000' // Your redirect uri
    let access_token
    

    if (!access_token) {
        const state = generateRandomString(16)

        localStorage.setItem(stateKey, state)
        const scope =
          'user-read-private user-read-email playlist-modify-public playlist-read-private'

        let url = 'https://accounts.spotify.com/authorize'
        url += '?response_type=token'
        url += '&client_id=' + encodeURIComponent(client_id)
        url += '&scope=' + encodeURIComponent(scope)
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri)
        url += '&state=' + encodeURIComponent(state)
        window.location.assign(url)
    }
}

export default generateSpotifyAccessToken