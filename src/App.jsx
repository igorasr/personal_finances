import "./App.css";
import { TableArea } from "./components/TableArea/";
import { ListProvider } from "./context/listContext";

function App() {
  return (
    <ListProvider>
      <div className="main">
        <div className="header">
          <h1 className="header__text">Sistema financeiro</h1>
        </div>
        <div className="container">
          <div className="body">
            <TableArea />
          </div>
        </div>
      </div>
    </ListProvider>
  );
}

export default App;
