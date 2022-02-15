import { useContext } from "react";
import { TableItem } from "../TableItem";
import "./Styles.css";
import { ListContext } from "../../context/listContext";

export const TableArea = () => {
  const { filteredList } = useContext(ListContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__head__column" style={{ width: "110px" }}>
            Data
          </th>
          <th className="table__head__column" style={{ width: "130px" }}>
            Categoria
          </th>
          <th className="table__head__column">Titulo</th>
          <th className="table__head__column" style={{ width: "150px" }}>
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredList.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};
