import useSound from 'use-sound';
import beep from'./assets/beep.mp3'
import { useState } from 'react';
import area from "./area"

function Search() {
    const [playbackRate, setPlaybackRate] = useState(0.75);
    const [play] = useSound(beep,{
        playbackRate,
        interrupt: true,
    });

    const handleClick = () => {
        setPlaybackRate(playbackRate + 0.1);
        play();
      };
    return (<div>
      <button
      onClick={handleClick}
      >yo</button>
      <h2>{play}</h2>
      <h1>{area}</h1>
      </div>
    );
  }
  export default Search