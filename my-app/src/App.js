import Video from './components/Video';
import './App.css'
function app(){
  let video = [{
    id : 1,
    title: 'REact Js',
    views: '15k',
    time: '1 year ago',
    channel: 'The Compass',
    url: 'https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg',
    verified: true
  },
  {
    id : 2,
    title: 'Angular Js',
    views: '15k',
    time: '2 year ago',
    channel: 'The Compass',
    url: 'https://picsum.photos/id/1/200/300',
    verified: false
  },
  {
    id : 3,
    title: 'Vue Js',
    views: '15k',
    time: '1.5 year ago',
    channel: 'The Compass',
    url: 'https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg',
    verified: true
  },
  {
    id : 4,
    title: 'Full Stack',
    views: '15k',
    time: '6 months ago',
    channel: 'The Compass',
    url: 'https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg',
    verified: false
  }]
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