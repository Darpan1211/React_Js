import { useState } from "react";
import "./PlayButton.css";
export default function PlayButton({ children, message, onPlay, onPause }) {
  console.log("render PlayButton")
  const [playing, setPlaying] = useState(true);
  function handleClick(e) {
    console.log(e);
    e.stopPropagation()
    if (playing) onPause();
    else onPlay();

    setPlaying(!playing);
  }
  return (
    <button onClick={handleClick}>
      {children} : {playing ? "⏯️" : "⏸️"}
    </button>
  );
}
