import css from "./Cpage.module.css";
import { useState } from "react";

export default function Cpage({ cartData, setCartData, handleRemover }) {
  const [name, setname] = useState("Your cart 🛒");

  let order = () => {
    let a =
      cartData.length !== 0 ? "order placed successfully 🎉" : "Your cart 🛒";
    setCartData([]);
    setname(a);
  };

  return (
    <>
      <div className={css.cpage}>
        <p>{name}</p>
        <ul>
          {cartData.map((item, i) => (
            <li key={i} className={css.cartItem}>
              <div className={css.dps}>
                <span style={{ margin: "0 10px 0 0" }}>{item.name} </span>
                <span style={{ fontFamily: "cursive", fontSize: "12px" }}>
                  {item.info}
                </span>
              </div>
              <button onClick={() => handleRemover(i)}>Remove</button>
            </li>
          ))}
        </ul>
        {cartData.length !== 0 ? (
          <>
            <button className={css.btn} onClick={() => order()}>
              Order
            </button>
            <button className={css.btn} onClick={() => setCartData([])}>
              Clear
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}
