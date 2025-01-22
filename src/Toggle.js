import React, { useState } from 'react';
import './Toggle.css';

const Toggle = ({ activeView, onActiveViewChange }) => {

  const view = ['Bullish','Bearish','RangeBound','Volatile'];

 

  const handleToggleClick = (item) => {
  //  console.log("Selected View:", item);
    onActiveViewChange(item); 
  };

  return (
    <div className='toggle-container'>
         {
          view.map((item,index)=>{
           return(
            <button key={index} 
            className={`button ${activeView === item ? "active" : ""}`}

             onClick={()=>handleToggleClick(item)}>
              {item}
            </button>
           )
           
          })
         }
    </div>

  )
}

export default Toggle;