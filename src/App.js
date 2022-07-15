import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: 'Livin wild',
      artist: 'Gunna',
      img_src: './img/gunna.jpg',
      src: './music/Gunna_-_livin_wild.mp3'
    },
    {
      title: 'Lovely ft. Khalid',
      artist: 'Billie Eilish',
      img_src: './img/billykhalid.jpg',
      src: './music/Billie_Eilish_Khalid_-_lovely.mp3'
    },

  ])

  const [currentSongId, setCurrentSongId] = useState(0);
  const [nextSongId, setNextSongId] = useState(currentSongId + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongId]} 
      nextSong={songs[nextSongId]} />
    </div>
  );
}

export default App;
