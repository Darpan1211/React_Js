import Video from './components/Video';
import './App.css'
function app(){
  return (
  <div className="app">
    <div>Videos</div>
    <Video title="node js tutorials"></Video>
    <Video bgColor="green" title="react ja tutorial"></Video>
    
  </div>
  )
}

export default app;