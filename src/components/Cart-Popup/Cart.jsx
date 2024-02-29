import { Link } from "react-router-dom";
import css from "./Cart.module.css";

export default function Cart({ cartData }) {
  return (
    <div className={css.cart}>
      <div>
        <p>{cartData.length}</p>
      </div>
      <Link
        to={"/cart-page"}
        style={{ color: "var(--dark)", textDecoration: "none" }}
      >
        Open Cart &#8594;
      </Link>
    </div>
  );
}
