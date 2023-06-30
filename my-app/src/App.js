import Video from './components/Video';
import './App.css'
function app(){
  return (
  <div className="app">
    <div>Videos</div>
    <Video title="node js tutorials" views= "15k" time="1 year ago"></Video>
    <Video bgColor="green" title="react ja tutorial" views= "10k"  time="1.5 year ago"></Video>
    
  </div>
  )
}

export default app;