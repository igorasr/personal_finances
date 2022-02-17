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

  const handleTotalResult = () => {
    let balanco = 0;
    let income = 0;
    let expense = 0;
    filteredList.forEach((item) => {
      if (categorys[item.category].expense) {
        balanco -= item.value;
        expense += item.value;
      } else {
        balanco += item.value;
        income += item.value;
      }
    });
    return { balanco, income, expense };
  };

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

  const handleAddItem = (item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <ListContext.Provider
      value={{
        handleAddItem,
        filteredList,
        currentMonth,
        handlePreviousMonth,
        handleNextMonth,
        setcurrentMonth,
        handleTotalResult,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
