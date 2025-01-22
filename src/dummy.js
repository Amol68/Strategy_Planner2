import React, { useState } from "react";
import { dateArray } from "./data.js";
import "./DropDown.css";

const DropDown = ({ selectedDate, onDateChange }) => {

  const handleOptionClick = (event) => {
    //  console.log("Selected View:", item);
    onDateChange(event.target.value);
  };

  return (
    <div className="dropDownContainer">
  <select
    value={selectedDate}
    onChange={handleOptionClick}
    className="dropDown"
  >
    {dateArray.map((date, index) => (
     
       <option key={date} value={date}>
        {date} 
      </option>

      
    ))}
  </select>
</div>
  );
};

export default DropDown;


.dropDownContainer{
    display:flex;
    justify-content:center;
    width: 33%;
    margin: 40px auto;
}

.dropDown{
    flex:1;
    padding: 10px 20px;
    border-radius: 20px;
    padding-right:40px;
    
}

.dateItem{
    background-color:gray;
}

@media (max-width:768px){
    width:23%;
}

@media (max-width:480px){
    width:13%;
}
