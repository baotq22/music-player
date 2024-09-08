import React from 'react';
import handlePlayer from '../hooks/handlePlayer';

function TrackList() {
  const { trackList, currentTrackName, playTrack, currentTrackIndex } = handlePlayer();

  return (
    <>
      <div className="trackList">
        {trackList.map((track, index) => (
          <div
            key={index}
            className={`song-title ${currentTrackIndex === index ? 'active' : ''}`}
            onClick={() => playTrack(index)}
          >
            {track.name} {currentTrackIndex === index && "(Playing)"}
          </div>
        ))}
      </div>
    </>
  );
}

export default TrackList;
