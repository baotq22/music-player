import { createContext, useState } from "react";
import Track1 from "../assets/audio/Track1.mp3"
import Track2 from "../assets/audio/Track2.mp3"
import Track3 from "../assets/audio/Track3.mp3"
import Track4 from "../assets/audio/Track4.mp3"
import Track5 from "../assets/audio/Track5.mp3"

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "AMALGAM - Rockot",
      file: Track1,
    },
    {
      name: "In Slow Motion (Inspiring Ambient Lounge) - soundbay",
      file: Track2,
    },
    {
      name: "Night Detective - Amaksi",
      file: Track3,
    },
    {
      name: "Nightfall / Future Bass Music - SoulProdMusic",
      file: Track4,
    },
    {
      name: "No Place To Go - SergePavkinMusic",
      file: Track5,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
}

const MusicPlayerProvider = ({children}) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  )
}

export { MusicPlayerContext, MusicPlayerProvider };