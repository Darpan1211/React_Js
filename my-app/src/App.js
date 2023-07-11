import { useState } from "react";
import Video from "./components/Video";
import "./App.css";
import video from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import videoDB from './data/data';

function App() {

  const [videos,setVideos] = useState(videoDB);
  return (
    <div className="app" onClick={()=>console.log('app')}>
      <div>
      <button onClick={()=>{
       
      
       setVideos( [...videos,{
        id : videos.length+1,
        title: 'Full Stack',
        views: '15k',
        time: '6 months ago',
        channel: 'The Compass',
        url: 'https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg',
        verified: false    
       }]);
      }}>Add Videos</button>
    </div>
      {videos.map((video) => (
        <Video
          bgColor="green"
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          url={video.url}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            message="play msg"
            onPlay={() => console.log("Play: ", video.title)}
            onPause={() => console.log("Pause",video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="Pause msg" onPause={()=>alert('Pause')}>Pause</PlayButton> */}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;


