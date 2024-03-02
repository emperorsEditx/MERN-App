import { useNavigate } from "react-router-dom";
import css from "./Hero.module.css";

export default function Hero({ setName, setNames, name }) {
  let navigate = useNavigate();
  let nameHandler = (e) => {
    e.preventDefault();
    setNames(name);
    navigate("/MERN-App/books-list");
  };

  return (
    <div className={css.hero}>
      <p className={css.heading}>The Best Books</p>
      <p>
        The reading of all good books is like conversation with the <br />
        finest (people) of the past centuries.
      </p>
      <p style={{ fontFamily: "cursive" }}>
        👋 Hi! Start by telling us your name.
      </p>

      <input
        type="text"
        placeholder="Enter your name here"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button style={{ marginTop: "20px" }} onClick={nameHandler}>
        Explore
      </button>
    </div>
  );
}
