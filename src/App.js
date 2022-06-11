import { useState } from 'react';
import './App.css';
import { Stopwatch } from './components/Stopwatch.jsx';
import Timer from './components/Timer';
function App() {
  const [Timerc,setTimerc]=useState(false);
  return (
    <div className="App">
      <div>
        <button className="Timer"onClick={()=>{setTimerc(true)}}>Timer</button>
        <button className="Stopwatch"onClick={()=>{setTimerc(false)}}>Stopwatch</button>
      </div>
      <div>
      {Timerc?<div><Timer/></div>:<div><Stopwatch/></div>}
      </div>
    </div>
  );
}

export default App;
