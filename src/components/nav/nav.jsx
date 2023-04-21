import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./nav.css";
import CartContext from "../context/cartContext";
import { useContext } from "react";

const Nav = () => {
  const { items } = useContext(CartContext);
  // console.log(item);
  return (
    <nav>
      <Link to={"/"}>
        <h2>Wear</h2>
      </Link>
      <Link to={"/checkout"}>
        <div className="cart">
          <AiFillShopping />
          <span>{items.length}</span>
        </div>
      </Link>
    </nav>
  );
};
export default Nav;
