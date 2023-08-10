import { FaHeart } from "react-icons/fa";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer__container fadeIn">
      <h4>
        Desenvolvido com{" "}
        <span className="heart">
          {" "}
          <FaHeart />{" "}
        </span>
        por <strong>Pedro Feitosa</strong>
      </h4>
      <p>
        Dsenhado por <strong>Kenzie Academy Brasil</strong>
      </p>
    </div>
  );
}
