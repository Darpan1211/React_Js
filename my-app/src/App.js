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
    <div className="app">
      <button onClick={()=>{
        
      }
      
    }>Add Videos</button>
      {video.map((video) => (
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


