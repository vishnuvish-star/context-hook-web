import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import "./card.css";
import CartContext from "../context/cartContext";
import { useContext } from "react";

const Card = ({ name, price }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card" onClick={() => addToCart(name, price)}>
      <div className="product-box">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping />
      </div>
      <h4>{price}</h4>
    </div>
  );
};
export default Card;
