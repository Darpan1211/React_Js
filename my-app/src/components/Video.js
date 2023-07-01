import './Video.css';

export default function Video({title,channel,views,time,url,verified}){

  let channeljsx;
  if (verified) {
    channeljsx = <div className="channel">{channel} ✅</div>
  }else{
    channeljsx = <div className="channel">{channel}</div>
  }
     return (
    <>
    <div className="container">
          <div className="pic">
    <img src={url} alt="Katherine Johnson" />
    </div>
    <div className="title">{title}</div>
    {channeljsx}
    <div className="views">{views} views <span>.</span>{time}</div>
    </div>
  </>
)}



