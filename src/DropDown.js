import React, { useState, useRef } from 'react';
import { dateArray } from './data';
import './DropDown.css';


const Dropdown = ({ selectedDate, onDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
 


  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
   
    onDateChange(option);
    setIsOpen(false);
  };

  
  const handleClickOutside = (event) => {
    if (!dropdownRef.current || !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div className="dropdown-container"> 

      <button 
        onClick={toggleDropdown}
        className="dropDownButton"
      >
       {selectedDate}
       
      
      </button>
      
      {isOpen && (
        <ul ref={dropdownRef} className="">
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
