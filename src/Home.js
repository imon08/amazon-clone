import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DYQznPeDoE8mARTXObHZVlOxhJfFTrvVmw&usqp=CAU"
          alt=""
        />
        <div className="home__row">
          {/*Product*/}
          <Product />
          {/*Product*/}
          <Product />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product />
          {/*Product*/}
          <Product />
          {/*Product*/}
          <Product />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
