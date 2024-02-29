import { Link } from "react-router-dom";
import Cart from "../Cart-Popup/Cart.jsx";
import css from "./Books.module.css";
import data from "./books-data.js";

export default function Books({ bookHandler, cartData }) {
  return (
    <>
      <ul className={css.booksList}>
        {data.map((book, i) => (
          <li key={i}>
            <img src={book.link} alt={book.name} />
            <div className={css.naming}>
              <p>{book.name}</p>
              <p className={css.data}>{book.info}</p>
              <div className={css.pricing}>
                <p className={css.price}>{book.price}</p>
                <button onClick={() => bookHandler(book)}>Buy Now</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {cartData.length !== 0 && <Cart cartData={cartData} />}
    </>
  );
}
