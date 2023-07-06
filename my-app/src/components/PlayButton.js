import './PlayButton.css';
export default function PlayButton({children,message,onPlay,onPause}){
    let playing = false;
    function handleClick(){
      if (playing) onPause();
      else onPlay();

      playing = !playing;
    }
    return(
        <button onClick={handleClick}>{children} : {playing?'>':'||'}</button>
    )
}