import './Video.css';

let Topic = "React Js";
let bgcolor = "bg";

function Video(props){
  console.log(props);
    return (
    <>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <div className={bgcolor} style={{backgroundColor:'red'}}>{props.title}</div>
  </>



)}

function Thumb(){
    return <div>Thumb</div>
}

export {Video,Thumb};