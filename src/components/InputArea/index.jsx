import "./Styles.css";
import { categorys } from "../../data/categorys";
import { ListContext } from "../../context/listContext";

import { useState, useContext } from "react";

export const InputArea = () => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  const { handleAddItem } = useContext(ListContext);

  let categoryKeys = Object.keys(categorys);

  const handleSubmit = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      handleAddItem({
        date: new Date(dateField),
        category: categoryField,
        tittle: titleField,
        value: parseFloat(valueField),
      });
    }
  };

  return (
    <div className="input__area container">
      <label className="input_container">
        <span>Data</span>
        <input
          type="date"
          value={dateField}
          onChange={(e) => {
            setDateField(e.target.value);
          }}
        />
      </label>

      <label className="input_container">
        <span>Categoria</span>
        <select
          onChange={(e) => {
            setCategoryField(e.target.value);
          }}
          value={categoryField}
        >
          <option value=""></option>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>
              {categorys[key].tittle}
            </option>
          ))}
        </select>
      </label>

      <label className="input_container">
        <span>Titulo</span>
        <input
          type="text"
          onChange={(e) => {
            setTitleField(e.target.value);
          }}
          value={titleField}
        />
      </label>

      <label className="input_container">
        <span>Valor</span>
        <input
          type="number"
          onChange={(e) => {
            setValueField(e.target.value);
          }}
          value={valueField}
        />
      </label>

      <label className="input_container">
        <span>&nbsp;</span>
        <button onClick={handleSubmit}>Adicionar</button>
      </label>
    </div>
  );
};
