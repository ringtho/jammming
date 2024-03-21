import React from 'react'
import './PlaylistTitle.scss'

const PlaylistTitle = ({ playlistTitle, setPlaylistTitle}) => {
  return (
    <div>
        <input 
            type='text' value={playlistTitle} 
            onChange={(e) => setPlaylistTitle(e.target.value)} 
            placeholder='Playlist Title'
            aria-label='Playlist Title'
        />
    </div>
  )
}

export default PlaylistTitle