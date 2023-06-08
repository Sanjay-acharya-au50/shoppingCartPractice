import React from 'react'
import './style.css'

const Header = ({size,page,setPage}) => {

 


  return (
    <div className='head'>

        <h1  onClick={()=> setPage(true)}>Shopping cart</h1>
        <h1  onClick={()=> setPage(false)} >cart <span>{size}</span></h1>
    
    </div>
  )
}

export default Header