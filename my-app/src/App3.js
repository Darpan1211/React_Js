import Video from './components/Video';
import './App.css';
import video from './data/data';
function app(){
  
  return (
  <div className="app">
    <div>Videos</div>
    {
      video.map(video=><Video bgColor="green" key={video.id} title={video.title} views= {video.views}  time={video.time} channel={video.channel} url={video.url} verified={video.verified} id={video.id}></Video>
      )
    }
    
  </div>
  )
}

export default app;