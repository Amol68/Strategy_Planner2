import React, { useState } from 'react';
import {dateArray} from './data';
import './DropDown.css';
const Dropdown = ({ selectedDate, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
   onDateChange(option)
  };

  return (
    <div className="dropdown-container">
      <button 
        onClick={toggleDropdown}
        className="dropDownButton"
      >
       {selectedDate}
      </button>
      
      {isOpen && (
        <ul className="">
          {dateArray.map((option) => (
            <li key={option} className="dropdown-option">
              <a href="#" className="dropdown-option-text" onClick={() => handleOptionSelect(option)}>{option}</a>
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
};

export default Dropdown;
