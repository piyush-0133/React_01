import React , { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

const LogIn = () => {

    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const submit=(e)=>{
        e.preventDefault()
        setUser({userName,password})
    }

    return(
        <div>
            <h2 className='p-3 mx-4 text-orange-300'>LogIn</h2>
            <input type="text"
                   value={userName}
                   onChange={(e)=>
                    setUserName(e.target.value)
                   }
                   className='m-4 p-3 border-spacing-0 text-center'

                   placeholder='UserName'/>
            <input type="text"
                   value={password}
                   onChange={(e)=>
                    setPassword(e.target.value)
                   }
                   
                   className='m-4 p-3 border-spacing-0 text-center border-red-300 '
                   placeholder='Password' />

            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default LogIn;