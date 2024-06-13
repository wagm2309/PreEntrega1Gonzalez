import "./navBar.css";
import { PiShoppingCartFill } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className="navBarContainer" id="fontNav">
      <h2>Sneakers NBA</h2>

      <ul style={{ display: "flex", gap: "20px" }}>
        <li style={{ listStyle: "none" }}>
          <a href="/news"> News </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a href="/retro"> Retro </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a href="/todas"> Todas </a>
        </li>
      </ul>

      <div className="cartContainer">
        {" "}
        {/* Nuevo contenedor para el icono y el número de carrito */}
        <PiShoppingCartFill size="2em" />
        <span className="numberCart">0</span>
      </div>
    </div>
  );
};

export default NavBar;
