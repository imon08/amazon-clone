import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://wallpaperaccess.com/full/6385972.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        {/*Product*/}
        <Product />
        {/*Product*/}
      </div>
      <div className="home__row">
        {/*Product*/}
        {/*Product*/}
        {/*Product*/}
      </div>
      <div className="home__row">{/*Product*/}</div>
    </div>
  );
}

export default Home;
