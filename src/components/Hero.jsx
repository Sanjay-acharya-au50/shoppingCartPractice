import React from 'react'
import data from './data.json'
import arr from './dataTwo'
import './style.css'

const Hero = () => {






  return (
    <div>
    
    <h1>hello world</h1>
    {
        data.map((e)=> {
            return(
            <>

                <h1>{e.name}</h1>
                <h1>{e.bike}</h1>
            </>

            )
        })
    }
    <hr/>
    {
        arr.map((d)=>{
            return(<>

                <p>{d.name}</p>
                <p>{d.cast}</p>
            </>

            )
        })
    }


    <div className='err'>
        <div className='bug'></div>
        <div className='bug'></div>
        <div className='bug'></div>
        <div className='bug'></div>
        <div className='bug'></div>
        <div className='bug'></div>

    </div>
    
    </div>
  )
}

export default Hero