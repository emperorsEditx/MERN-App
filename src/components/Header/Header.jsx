import { Navigate } from "react-router-dom";
import css from "./Header.module.css";

export default function Header({ names }) {
  return (
    <header>
      <div className={css.logo}>
        <p>The Book Worm.</p>
      </div>

      {names && (
        <div className={css.name}>
          <p style={{ color: "var(--dark)" }}>{names}</p>
        </div>
      )}
      {names ? <Navigate to="/books-list" /> : null}
    </header>
  );
}