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
    <PlayButton message="play msg" onPlay={()=>console.log('Playy')} onPause={()=>console.log('Pause')}>Play</PlayButton>
   {/* <PlayButton message="Pause msg" onPause={()=>alert('Pause')}>Pause</PlayButton> */}
    </div>
  </div>
  )
}

export default app;