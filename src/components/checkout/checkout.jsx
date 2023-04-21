import CartContext from "../context/cartContext";
import { useContext } from "react";
import "./checkout.css";

const Checkout = () => {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <div className="card">
      <div>
        <h2>Checkout</h2>
        <div>
          {items.map((item) => (
            <div>
              <h2>{item.name}</h2>
              <h2>{item.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Checkout;
