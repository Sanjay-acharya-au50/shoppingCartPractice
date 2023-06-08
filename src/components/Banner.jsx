import React from "react";
import list from "./items";
import "./style.css";

const Banner = ({handleClick}) => {


  return (
    <div className="map">
      {
        list.map((e,id) => {
        return (
          <div className="div" key={id}>
            <div className="divTwo">
              <img src={e.img} alt="pho" />
              <h2>{e.title}</h2>
              <h3>{e.author}</h3>
              <h1>{e.price}</h1>
              <button onClick={() => handleClick(e)} >add to cart</button>
            </div>
          </div>
        );
      })
      }
    </div>
  );
};

export default Banner;
