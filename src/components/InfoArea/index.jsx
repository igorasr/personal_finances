import { useContext } from "react";
import { ListContext } from "../../context/listContext";
import { formatCurrentMonth } from "../../utils/datefilter";
import "./Styles.css";

export const InfoArea = () => {
  const { currentMonth, handlePreviousMonth, handleNextMonth } =
    useContext(ListContext);

  return (
    <div className="info__area container ">
      <div className="month__area">
        <div className="monthArrow" onClick={handlePreviousMonth}>
          ⬅️
        </div>

        <div className="monthTittle">{formatCurrentMonth(currentMonth)}</div>

        <div className="monthArrow" onClick={handleNextMonth}>
          ➡️
        </div>
      </div>
      <div className="resume__area"></div>
    </div>
  );
};
