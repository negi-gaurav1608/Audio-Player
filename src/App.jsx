import { useContext } from 'react';
import './App.css';
import Display from './Components/Display';
import Player from './Components/Player';
import Sidebar from './Components/Sidebar';
import { PlayerContext } from './Context/PlayerContext';

function App() {
  const {audioRef,track}=useContext(PlayerContext);
  



  return (
    <>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
        
        <audio ref={audioRef} src={track.file} preload='auto'/>
      </div>


    </>
  )
}

export default App
