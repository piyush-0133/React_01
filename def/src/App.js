import {useState} from "react"
import './App.css';

function App() {

  const [coloro,setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 bg-red-200"
    style={{backgroundColor:coloro}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0">
        <div className="flex fixed-wrap justify-center gap-3 bg-slate-300 px-3 py-2 rounded-3xl border-white border-2">
            <button onClick={()=>{setcolor("red")}} className="bg-red-600 border-white border-2 px-3 py-2 justify-center rounded-2xl text-white">
                 Red
             </button>
            <button onClick={()=> {setcolor("yellow")}} className="bg-yellow-300 border-white border-2 px-3 py-2 rounded-2xl text-white">
                 Yellow
             </button>
            <button onClick={()=>{setcolor("blue")}} className="bg-blue-300 px-3 py-2 rounded-2xl border-white border-2 text-white">
                 Blue
             </button>
            <button onClick={()=>{setcolor("green")}} className="bg-green-400  px-3 py-2 rounded-2xl border-white border-2 text-white">
                 Green
             </button>
            <button onClick={()=>{setcolor("orange")}} className="bg-orange-500 px-3 py-2 rounded-2xl border-white border-2 text-white">
                 Orange
             </button>
        </div>
       </div>
    </div>
    
  );
}

export default App;
