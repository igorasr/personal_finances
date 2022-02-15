import "./Styles.css";

export const TableItem = ({ item }) => {
  return (
    <tr>
      <td className="table__item__line">...</td>
      <td className="table__item__line">{item.category}</td>
      <td className="table__item__line">{item.tittle}</td>
      <td className="table__item__line">R$ {item.value}</td>
    </tr>
  );
};
