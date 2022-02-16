import "./Styles.css";
import { categorys } from "../../data/categorys";

export const InputArea = () => {
  let categoryKeys = Object.keys(categorys);

  return (
    <div className="input__area container">
      <label className="input_container">
        <span>Data</span>
        <input type="date" />
      </label>
      <label className="input_container">
        <span>Categoria</span>
        <select>
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
        <input type="text" />
      </label>
      <label className="input_container">
        <span>Valor</span>
        <input type="number" />
      </label>
      <label className="input_container">
        <span>&nbsp;</span>
        <button>Adicionar</button>
      </label>
    </div>
  );
};
