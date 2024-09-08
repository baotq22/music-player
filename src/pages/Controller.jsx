import React from 'react'
import handlePlayer from '../hooks/handlePlayer';

function Controller() {
  const {
    playPreviousTrack,
    togglePlay,
    playNextTrack,
    isPlaying,
  } = handlePlayer();
  return (
    <div className="cont">
      <div className="controller">
        <div className="controlCont">
          <button onClick={playPreviousTrack}>
            <p>Prev</p>
          </button>
          <button onClick={togglePlay}>
            <p>{isPlaying ? "Pause" : "Play"}</p>
          </button>
          <button onClick={playNextTrack}>
            <p>Next</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Controller