import "./App.css";
import { TableArea } from "./components/TableArea/";
import { InfoArea } from "./components/InfoArea";
import { ListProvider } from "./context/listContext";

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1 className="header__text">Sistema financeiro</h1>
      </div>
      <div className="container">
        <div className="body">
          <ListProvider>
            <InfoArea />
            <TableArea />
          </ListProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
