import { useState , useCallback ,useEffect, useRef } from 'react'


function App() {
  const [length,setlength] = useState(8)
  const [allowednum,setallowednum] = useState(false)
  const [allowchar,setAllowChar] = useState(false)
  const [password,setPassword] = useState("")

  const passRef = useRef(null)

 const passwordGenrator = useCallback(()=>{
  
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(allowednum){
    str += "0123456789"
  }
  if(allowchar){
    str += "~!@#$%^&*()_+-={}|[]\:;'<>,./?"
  }

  for(let i=1 ; i<=length ; i++){
    let char= Math.floor(Math.random()*str.length + 1 )
    pass = pass + str.charAt(char)
  }
  
  setPassword(pass)

 },[length,allowednum,allowchar,setPassword])

 useEffect(()=>{

  passwordGenrator()
 },[length,allowednum,allowchar,setPassword])

 const textcopied = useCallback(()=>{
  passRef.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])

  return (
    <>
      
    <div className="fixed flex flex-wrap justify-center text-4xl w-full py-4  bg-slate-400">
    <h1 className =" flex flex-wrap justify-center text-4xl w-full py-4">Password Generator</h1>
      <div className="flex flex-col  rounded-lg overflow-hidden py-4 px-4 bg-red-400">
      
        <input 
        type="text" 
        value={password}
        placeholder='Password'
        ref={passRef}
        readOnly
        className='w-full py-4 px-3 text-center rounded-2xl'
        />
      </div>
      <button onClick={textcopied} className="mx-3">Copy</button>
      <div className="flex rounded-xl px-3 bg-slate-50 my-6 mx-3">
          <div>
-              <input 
            type="range"
            min={7}
            max={100}
            
            value={length} 
            onChange={(e)=>{setlength(e.target.value)}}
            className='cursor-pointer'
            /> <label className="text-2xl mx-2" >length:{length}</label>
          </div>
      </div>
      <div className="flex rounded-xl px-3 bg-slate-50 my-6 mx-3">
          <div>
-              <input 
            type="checkbox"
            defaultChecked={allowednum}
            onChange={()=>{
              setallowednum((prev) => !prev)
            }}
            /> <label className="text-2xl mx-2" >Number</label>
          </div>
      </div>
      <div className="flex rounded-xl px-3 bg-slate-50 my-6 mx-3">
          <div>
-              <input 
            type="checkbox"
            defaultChecked={allowchar}
            onChange={()=>{
              setAllowChar((prev) => !prev)
            }}
            /> <label className="text-2xl mx-2" >Character</label>
          </div>
      </div>              
    </div>
  </>
    )
}

export default App
