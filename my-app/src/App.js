import Video from './components/Video';
import './App.css'
function app(){
  let obj = {
    title: 'Dark',
    views: '15k',
    time: '1 year ago',
    channel: 'The Compass',
    url: 'https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg',
    verified: true
  }
  return (
  <div className="app">
    <div>Videos</div>
    <Video {...obj}></Video>
    <Video bgColor="green" title="Wood" views= "10k"  time="1 month ago" channel="The Compass" url="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"></Video>
    
  </div>
  )
}

export default app;