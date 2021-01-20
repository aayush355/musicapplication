import React from 'react';
import {useState,useEffect} from 'react';
import Player from './components/Player';



function App() {
  const[songs]=useState([  {
      title: "Rimjhim Gire Sawan",
      artist: "Kishore kumar",
      img_src: "./images/song.jpg",
      src: "./music/Rimjhim gire Sawan.mp3"
    },
    {
      title: "Hawayein",
      artist: "Arijit singh",
      img_src: "./images/srk.jpg",
      src: "./music/hawayein.mp3"
    },{
      title: "Tere chehre se",
      artist: "kishore kumar",
      img_src: "./images/rishi.jpg",
      src: "./music/Tere Chehre se.mp3"
    },
    {
      title: "whole new world",
      artist: "Zayn Malik",
      img_src: "./images/song-3.jpg",
      src: "./music/whole new world.mp3"
    }
    ]);
  
  const[currentSongIndex,setCurrentSongIndex]=useState(0);
  const[nextSongIndex,setNextSongIndex]=useState(0);

  useEffect(() => {
    setNextSongIndex(()=>{
       if(currentSongIndex+1>songs.length-1){
        return 0;
       }else{
        return currentSongIndex+1;
       }
     });
   }, [currentSongIndex])
  return (
    <div className="App">
      <Player 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs} />
    </div>
  );
}

export default App;
