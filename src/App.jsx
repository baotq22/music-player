import './App.css'
import { MusicPlayerProvider } from './context/MusicPlayerContext'
import Controller from './pages/Controller'
import TrackList from './pages/TrackList'
import NowPlaying from './pages/NowPlaying'

function App() {

  return (
    <MusicPlayerProvider>
      <div className="mainPlayer">
        <NowPlaying />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  )
}

export default App
