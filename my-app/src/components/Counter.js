import { useState } from "react";

export default function Counter() {
    console.log('render Counter');
  const [number, setNumber] = useState(0);
  function handleClick(e) {
    //number++;
    e.stopPropagation();
    setTimeout(()=>{
        setNumber(number+1);
    },2000)
    console.log(number);
  }
  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}
