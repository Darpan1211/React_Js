import './App.css';

let name = "react-app"
function App() {
  return (
    <div className="App">
      <div className="App-header">
        Hello World
        
        
        {name}
        <Demo></Demo>
        </div>
    </div>
  );
}
function Demo() {
  return (
    <div className="App">
      <div className="App-header">
        This is a demo
        </div>
    </div>
  );
}

export default App;
