import { useState } from "react";
import currencyList from "./data/currencyList.json";
import "./App.css";

type CurrencyItem = {
  name: string;
};

export const App = () => {
  const [data, setData] = useState([]);

  const handleAddCurrency = (item: any) => {
    const checkDuplicate = () => {
      return data.some((someEl) => someEl["name"] === item.id);
    };
    const newItem: CurrencyItem = { name: item.id };
    if (checkDuplicate()) {
      const filteredArray = () => {
        return data.filter((filtEl) => filtEl["name"] !== item.id);
      };
      setData(filteredArray);
    } else {
      const updatedData: any = [...data, newItem];
      setData(updatedData);
    }
  };

  const findElement = (item: any) => {
    const isFound = () => {
      return data.some((someEl) => someEl["name"] === item);
    };
    return isFound() ? "white" : "rgb(235, 235, 235)";
  };

  return (
    <div className="App">
      <div className="container">
        <div className="subContainer subContainer-selected">
          {data.map((item: CurrencyItem, ind: number) => (
            <div key={ind}>
              <div key={ind} className="currencyItem currencyItem-selected">
                {item.name}
              </div>
              <label className="removeIcon" htmlFor={item.name}></label>
            </div>
          ))}
        </div>
        <div className="subContainer " data-testid="currencyContainer">
          {currencyList.map((item: CurrencyItem, ind: number) => (
            <label
              key={ind}
              className="currencyItem"
              style={{ backgroundColor: findElement(item.name) }}
              data-testid="currencyLabel"
            >
              <input
                style={{ backgroundColor: findElement(item.name) }}
                key={ind}
                id={item.name}
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleAddCurrency(e.currentTarget)}
                name={item.name}
                role="option"
              ></input>
              {item.name}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
