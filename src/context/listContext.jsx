import { createContext, useState, useEffect } from "react";
import { filterListByMonth, getCurrentMonth } from "../utils/datefilter";
import { items } from "../data/items";
import { categorys } from "../data/categorys";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState();
  const [currentMonth, setcurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, []);

  return (
    <ListContext.Provider value={{ filteredList }}>
      {children}
    </ListContext.Provider>
  );
};
