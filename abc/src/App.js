import { useState } from 'react'
//import Play from "./Work_1.js"

function App() {
  
  let [counter,set] = useState(13)

  const add = () =>{
    console.log("Value added",Math.random(),counter);
    set(counter++)
  }

  const minus = () =>{
    set(counter-1)
  }

  return (
    <div> 
        <h2>Counter Value {counter}</h2>
        <button onClick={add}>Adding Value</button>
        <button onClick={minus}>Decreasing Value</button>
    </div>
  );
}

export default App;
