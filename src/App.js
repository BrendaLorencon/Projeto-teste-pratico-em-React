import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./AppStyles.scss";
import { FaSearch } from "react-icons/fa";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <div className="buttons-action">
        <Button title="Incluir" />
        <Button title="Valores por estado" />
        <Button title="Maiores rendas" />
      </div>

      <div className="filter-table">
        <FaSearch>
        </FaSearch>
          <input type="text" placeholder="Busca por nome" />
      </div>

      <Table />
      
    </>
    // <div>
    //   <button type="submit">Incluir</button>
    //   <button type="button">Valores por estado</button>
    //   <button type="button">Maiores Rendas</button>
    // </div>

    // <tr>
    //   <td>Nome</td>
    //   <td>Estado</td>
    //   <td>Ações</td>
    // </tr>
    // </>
  );
}

export default App;
