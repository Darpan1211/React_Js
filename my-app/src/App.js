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
    <PlayButton message="play msg" onClick={()=>console.log('Playy')}>Play</PlayButton>
    <PlayButton message="Pause msg" onClick={()=>alert('Pause')}>Pause</PlayButton>
    </div>
  </div>
  )
}

export default app;