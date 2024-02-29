import css from "./Hero.module.css";

export default function Hero({ setName, nameHandler }) {
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
      <form onSubmit={nameHandler}>
        <input
          type="text"
          placeholder="Enter your name here"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Explore</button>
      </form>
    </div>
  );
}
