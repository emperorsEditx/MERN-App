import { useState } from "react";
import Books from "./components/Books/Books";
import Cpage from "./components/Cart-Page/Cpage";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [name, setName] = useState("");
  const [names, setNames] = useState("");

  let nameHandler = (e) => {
    e.preventDefault();
    setNames(name);
  };
  let bookHandler = (book) => {
    let data = [...cartData, book];
    setCartData(data);
  };
  let handleRemover = (i) => {
    cartData.splice(i, 1);
    let newData = [...cartData];
    setCartData(newData);
  };

  return (
    <>
      <BrowserRouter>
        <Header names={names} />
        <Routes>
          <Route
            path="./"
            element={
              <Hero nameHandler={nameHandler} name={name} setName={setName} />
            }
          />
          <Route
            path="./books-list"
            element={<Books bookHandler={bookHandler} cartData={cartData} />}
          />
          <Route
            path="./cart-page"
            element={
              <Cpage
                cartData={cartData}
                handleRemover={handleRemover}
                setCartData={setCartData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
