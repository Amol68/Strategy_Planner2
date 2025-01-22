import { useEffect, useState } from "react";
import Toggle from "./Toggle";
import DropDown from "./DropDown";
import { dateArray, strategyArray } from "./data.js";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);
  const [strategy, setStrategy] = useState();
  const [noStrategy, setNoStrategy] = useState();
  const [toggle, setToggle] = useState(false);
  

  const handleViewChange = (newActiveView) => {
    setActiveView(newActiveView);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

   const handleToggle=(isOpen)=>{
      setToggle(isOpen);
   }
 

  const handleParameterChange = (view, date) => {
    const viewData = strategyArray.find((item) => item.View === view);

    if (viewData && viewData.Value[date]) {
      const strategies = viewData.Value[date];
      console.log("gshjsa", strategies);
      const strategyWithCount = {};

      for (let i = 0; i < strategies.length; i++) {
        if (strategyWithCount[strategies[i]])
          strategyWithCount[strategies[i]]++;
        else strategyWithCount[strategies[i]] = 1;
      }

      setStrategy(strategyWithCount);
      setNoStrategy(null);
    }
    else {
      setStrategy(null);
      setNoStrategy({"MSG":date})
    }
  };

  useEffect(() => {
    handleParameterChange(activeView, selectedDate);
  }, [activeView, selectedDate]);

  return (
    <div className="App">
      <Toggle activeView={activeView} onActiveViewChange={handleViewChange} />

      <DropDown selectedDate={selectedDate} onDateChange={handleDateChange}  />


      {
         noStrategy && 
         <div className="errorContainer">
          <text className="errorText">

          There are no strategies for{' '}
          </text>
        
        <br />
                <text className="errorDate">
        {new Date(noStrategy.MSG).toLocaleDateString('en-GB', {
           day: '2-digit',
           month: 'short',
           year: 'numeric',
         })}
        </text>
         
       </div>
      }

      {strategy &&
        Object.keys(strategy).map((item, index) => {
          return (
            <div className="strateyContainer">
              <div className="left">
                <span className="strategyName">{item}</span>
              </div>

              <div div className="right">
                <div className="circle"></div>

                <span className="strategyCount">{strategy[item]}</span>

                {strategy[item] > 1 ? (
                  <span className="strategies">Strategies</span>
                ) : (
                  <span className="strategies">Strategy</span>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
