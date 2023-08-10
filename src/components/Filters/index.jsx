import "./style.css";
import { FaInfinity, FaArrowDown, FaArrowUp } from "react-icons/fa";

function Filters({ handleSearch, clearSearch, buttonFilter }) {
  return (
    <div className="filters__container">
      <h3>Resumo financeiro</h3>
      <nav>
        <button
          id="filterTodos"
          className="button--nav"
          onClick={() => clearSearch()}
          disabled={buttonFilter === "todos" ? true : false}
        >
          <FaInfinity />
          <span className="button--text">Todos</span>
        </button>
        <button
          id="filterEntradas"
          className="button--nav"
          onClick={() => handleSearch("entrada")}
          disabled={buttonFilter === "entrada" ? true : false}
        >
          <FaArrowDown />
          <span className="button--text">Entradas</span>
        </button>
        <button
          id="filterDespesas"
          className="button--nav"
          onClick={() => handleSearch("despesa")}
          disabled={buttonFilter === "despesa" ? true : false}
        >
          <FaArrowUp />
          <span className="button--text">Despesas</span>
        </button>
      </nav>
    </div>
  );
}

export default Filters;
