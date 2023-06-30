import './Video.css';

function Video({title,bgColor}){
  let topic = "React Js";
let bgs = "bg";
  
    return (
    <>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <div className={bgs} style={{backgroundColor:bgColor}}>{title}</div>
  </>



)}

function Thumb(){
    return <div>Thumb</div>
}

export {Video,Thumb};