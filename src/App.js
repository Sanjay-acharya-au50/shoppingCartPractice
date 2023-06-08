
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
// import Hero from './components/Hero';
import { useState } from "react";
import Carts from './components/Carts';



function App() {
  const [cart, setCart] = useState([])

  const handleClick = (e) => {
    let isPresent = false;

    cart.forEach((pro)=>{
      if(e.id === pro.id){
        isPresent=true;
      }
     
    })
    if(isPresent){
      return;
    }


    // console.log(e);
    setCart([...cart, e])
    console.log(cart,e);
  };

 // pageShow code
 const [page, setPage ] = useState(true)


//  increment decrement

  const handleChange = (item,d) => {

    // console.log(item,d)
    let ind = -1;
    cart.map((data,index)=>{
      if(data.id === item.id){
        ind = index;
      }
    })

    const tempArr = cart;
    tempArr[ind].amount += d;

    if(tempArr[ind].amount === 0 ){
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr])

  }


  return (
    <div className="App">

    <Header size={cart.length} page={page} setPage={setPage} /><hr/>

    {/* <Hero/> */}
    {
      page ?  <Banner  handleClick={handleClick}/> : <Carts cart={cart} handleChange={handleChange} setCart={setCart}/>

    }


    </div>
  );
}

export default App;

