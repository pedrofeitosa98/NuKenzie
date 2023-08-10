import logo from "./ovtm-bank-logo.svg";
import "./style.css";
import { FaHome } from "react-icons/fa";

function Header({ setLogin }) {
  return (
    <div className="header__container fadeInDown">
      <nav>
        <img src={logo} alt="Logo OvitomBank" />
        <button className="button--nav" onClick={() => setLogin(false)}>
          <FaHome />
          Início
        </button>
      </nav>
    </div>
  );
}

export default Header;
