import React from 'react'
import './Playlist.scss'
import Tracklist from '../Tracklist/Tracklist'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'

const Playlist = ({
  playlist,
  alterFunction,
  text,
  playlistTitle,
  setPlaylistTitle,
  saveToPlaylist
}) => {
  return (
    <div>
      <h1>Playlist</h1>
      <PlaylistTitle
        playlistTitle={playlistTitle}
        setPlaylistTitle={setPlaylistTitle}
        saveToPlaylist={saveToPlaylist}
      />
      <Tracklist results={playlist} alterFunction={alterFunction} text={text} />
    </div>
  )
}

export default Playlist