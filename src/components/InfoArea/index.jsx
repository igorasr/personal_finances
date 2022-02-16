import { useContext } from "react";
import { ListContext } from "../../context/listContext";
import { formatCurrentMonth } from "../../utils/datefilter";
import "./Styles.css";

export const InfoArea = () => {
  const {
    currentMonth,
    handlePreviousMonth,
    handleNextMonth,
    handleTotalResult,
  } = useContext(ListContext);
  const { balanco, expense, income } = handleTotalResult();
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
      <div className="resume__area">
        <div className="income">
          <span>Income</span>
          <p>R$ {income}</p>
        </div>
        <div className="expense">
          <span>Expense</span>
          <p>R$ {expense}</p>
        </div>
        <div
          className="balanco"
          style={{ color: balanco < 0 ? "red" : "green" }}
        >
          <span>Balanco</span>
          <p>R$ {balanco}</p>
        </div>
      </div>
    </div>
  );
};
