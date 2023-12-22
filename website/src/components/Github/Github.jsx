import React, { useEffect, useState } from 'react'

function Github(){

    const [data,setData] = useState();
    useEffect(()=>
        {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`).then(response => response.json()).then(data => 
            {
                console.log(data)
                console.log(data.date)
                setData(data)})
        }
    ,[])

    return(
        <div className='text-3xl p-4 m-3 bg-slate-500 text-white'>Github Follower : </div>
    )
}

export default Github;