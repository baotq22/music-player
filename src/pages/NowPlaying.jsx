import React from 'react'
import handlePlayer from '../hooks/handlePlayer';

function NowPlaying() {
  const {
    currentTrackName
  } = handlePlayer();
  return (
    <div className="trackInfo">
      <p>Now Playing: {currentTrackName ? currentTrackName : "No track"}</p>
    </div>
  )
}

export default NowPlaying