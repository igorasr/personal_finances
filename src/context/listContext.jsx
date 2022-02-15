import { createContext, useState, useEffect } from "react";
import { filterListByMonth, getCurrentMonth } from "../utils/datefilter";
import { items } from "../data/items";
import { categorys } from "../data/categorys";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handlePreviousMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);

    setcurrentMonth(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    );
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    setcurrentMonth(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
    );
  };

  return (
    <ListContext.Provider
      value={{
        filteredList,
        currentMonth,
        handlePreviousMonth,
        handleNextMonth,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
