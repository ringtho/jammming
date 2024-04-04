import React from 'react'
import './PlaylistTitle.scss'

const PlaylistTitle = ({ playlistTitle, setPlaylistTitle, saveToPlaylist }) => {
  return (
    <div className='playlistTitle_container'>
      <form onSubmit={(e) => saveToPlaylist(e)}>
        <input
          type="text"
          value={playlistTitle}
          onChange={(e) => setPlaylistTitle(e.target.value)}
          placeholder="Playlist Title"
          aria-label="Playlist Title"
          required
        />
        <button>
          Save To Spotify
        </button>
      </form>
    </div>
  )
}

export default PlaylistTitle