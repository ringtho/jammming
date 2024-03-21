import React from 'react'

const PlaylistName = ({ playlistName, setPlaylistName}) => {
  return (
    <div>
        <input 
            type='text' value={playlistName} 
            onChange={(e) => setPlaylistName(e.target.value)} 
            placeholder='Playlist Name'
            aria-label='Playlist Name'
        />
    </div>
  )
}

export default PlaylistName