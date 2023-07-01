import './Video.css';

export default function Video({title,channel,views,time,url}){
      return (
    <>
    <div className="container">
          <div className="pic">
    <img src={url} alt="Katherine Johnson" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel}</div>
    <div className="views">{views} views <span>.</span>{time}</div>
    </div>
  </>
)}



