import './PlayButton.css';
export default function PlayButton(){
    function handleClick(){
        console.log('Play button');
    }
    return(
        <button onClick={handleClick}>Play</button>
    )
}