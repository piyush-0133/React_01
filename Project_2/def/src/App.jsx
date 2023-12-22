import { useState } from 'react'
import Card_1 from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myData = {
    name:"piyush singh",
    age:19
  }

  let myArray = [1,2,"piyush"]
  return (
    <>
      <h1 className = 'bg-green-400 text-white p-5 rounded-xl'>Button Created</h1> 
      <Card_1 dataPass="Data" myVal={myData} myArray = {myArray} />
      <Card_1/>
      
    </>
  )
}

export default App
