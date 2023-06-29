import './Video.css';

let Topic = "React Js";
let bgcolor = "bg";

function Video(){
    return (
    <>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <div className={bgcolor} style={{backgroundColor:'red'}}>{Topic} Tutorial- Components</div>
  </>



)}

function Thumb(){
    return <div>Thumb</div>
}

export {Video,Thumb};