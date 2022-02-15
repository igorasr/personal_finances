import "./Styles.css";
import { formatDate } from "../../utils/datefilter";
import { categorys } from "../../data/categorys";

export const TableItem = ({ item }) => {
  return (
    <tr>
      <td className="table__item__line">{formatDate(item.date)}</td>

      <td className="table__item__line">
        <div
          className="category"
          style={{ background: `${categorys[item.category].color}` }}
        >
          {categorys[item.category].tittle}
        </div>
      </td>

      <td className="table__item__line">{item.tittle}</td>

      <td
        className="table__item__line"
        style={{ color: categorys[item.category].expense ? "red" : "green" }}
      >
        R$ {item.value}
      </td>
    </tr>
  );
};
