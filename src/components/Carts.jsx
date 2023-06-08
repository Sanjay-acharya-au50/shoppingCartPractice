import React, { useEffect, useState } from 'react'
import './style.css'

const Carts = ({cart,setCart,handleChange}) => {

    const removePro = (idd) => {
       let cartStore = cart.filter(i => i.id !== idd)
        // consol.log(cartStore);
        setCart(cartStore)
       }
       const [price, setPrice] = useState(0)
        
       const handlePrice = () => {
        let amo = 0;
        cart.map((e)=>(
            amo += e.amount * e.price
        ))
        setPrice(amo)
       }
       useEffect (()=>{
        handlePrice()
       })
            

    


  return (
    <div>
    {
        cart.map((item)=>{
            return(
                <div className='mid'>

                <div  >
                  <img src={item.img} alt="pho1" className='pho1'/>
                <h2>{item.title}</h2>
              <h3>{item.author}</h3>
              <h1>{item.price}</h1>
                <button onClick={()=>handleChange(item, +1)} className='btn'>+</button>
                <button onClick={()=>handleChange(item, -1)} className='btn'>-</button>
              <button onClick={()=>removePro(item.id)} className='btn'>remove</button>
                </div>
                </div>
            )
        })
    }
    <h1 > total price : {price}</h1>
    
    
    
    </div>
  )
}


export default Carts