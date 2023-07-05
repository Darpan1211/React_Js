import Video from './components/Video';
import './App.css';
import video from './data/data';
import PlayButton from './components/PlayButton';

function app(){
  
  return (
  <div className="app">
    <div>Videos</div>
    {
      video.map(video=><Video bgColor="green" key={video.id} title={video.title} views= {video.views}  time={video.time} channel={video.channel} url={video.url} verified={video.verified} id={video.id}></Video>
      )
    }
    <div style={{clear:'both'}}>
    <PlayButton name="Play" message="play msg"></PlayButton>
    <PlayButton name="Pause" message="Pause msg"></PlayButton>
    </div>
  </div>
  )
}

export default app;