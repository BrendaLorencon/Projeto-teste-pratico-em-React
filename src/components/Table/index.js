import { tableData } from "../../AppData";
import "./styles.scss";

export default function Table() {
  return (
    <table>
      <thead>
        <th>Nome</th>
        <th>Estado</th>
        <th width="170px">Ações</th>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr>
            <td>{ item.name }</td>
            <td>{ item.state }</td>
            <td className="buttons-table"> 
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}