import "./styles/global.css";
import "./styles/animations.css";
import "./App.css";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import Filters from "./components/Filters";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [transactionsSearch, setTransactionsSearch] = useState([]);
  const [buttonFilter, setButtonFilter] = useState("todos");

  const [formData, setFormData] = useState({
    description: "",
    type: "entrada",
    value: "",
  });

  useEffect(() => {
    if (localStorage.getItem("@OVITOM_BANK_TRANSACTIONS")) {
      setListTransactions(
        JSON.parse(localStorage.getItem("@OVITOM_BANK_TRANSACTIONS"))
      );
    }
  }, []);

  function removeTransaction(transactionTarget) {
    const listRefreshed = listTransactions.filter(
      (transaction) => transaction !== transactionTarget
    );
    setListTransactions(listRefreshed);
    if (transactionsSearch.length > 0) {
      const listRefreshedOnFilter = transactionsSearch.filter(
        (transaction) => transaction !== transactionTarget
      );

      setTransactionsSearch(listRefreshedOnFilter);
      localStorage.setItem(
        "@OVITOM_BANK_TRANSACTIONS",
        JSON.stringify(listRefreshedOnFilter)
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const numberValue = Number(formData.value);

    if (formData.description === "") {
      alert("Adicione uma descrição na transação");
    } else {
      const newTransaction = {
        description: formData.description,
        type: formData.type,
        value: formData.type === "entrada" ? numberValue : -numberValue,
      };

      setListTransactions([...listTransactions, newTransaction]);
      localStorage.setItem(
        "@OVITOM_BANK_TRANSACTIONS",
        JSON.stringify([...listTransactions, newTransaction])
      );

      setFormData({
        description: "",
        type: "entrada",
        value: "",
      });
    }
  }

  function handleSearch(filter) {
    const newFilter = listTransactions.filter(
      (transaction) => transaction.type === filter
    );
    setTransactionsSearch(newFilter);
    setButtonFilter(filter);
  }

  function clearSearch() {
    setTransactionsSearch([]);
    setButtonFilter("todos");
  }

  return (
    <>
      {isLogin ? (
        <>
          <Header setLogin={setLogin} />
          <main className="fadeIn">
            <aside>
              <Form
                handleSubmit={handleSubmit}
                setFormData={setFormData}
                formData={formData}
              />
              <TotalMoney transactionsList={listTransactions} />
            </aside>
            <section className="transactionsSection">
              <Filters
                handleSearch={handleSearch}
                clearSearch={clearSearch}
                buttonFilter={buttonFilter}
              />
              <List
                transactionsList={listTransactions}
                removeTransaction={removeTransaction}
                transactionsSearch={transactionsSearch}
                buttonFilter={buttonFilter}
              />
            </section>
          </main>
        </>
      ) : (
        <Login setLogin={setLogin} />
      )}
      <Footer />
    </>
  );
}

export default App;
