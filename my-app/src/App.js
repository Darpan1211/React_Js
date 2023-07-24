import { useState } from "react";
import Video from "./components/Video";
import "./App.css";
import video from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";

function App() {
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className="app" onClick={() => console.log("app")}>
      <div></div>
      <AddVideo></AddVideo>
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
            onPause={() => console.log("Pause", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;
