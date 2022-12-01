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
          <Product
            id="1234"
            title="The lean startup"
            price={2.33}
            rating={5}
            image="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg"
          />
          {/*Product*/}
          <Product
            id="1235"
            title="The lean startup"
            price={2.33}
            rating={5}
            image="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg"
          />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product
            id="1236"
            title="The lean startup"
            price={2.33}
            image="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg"
            rating={5}
          />
          {/*Product*/}
          <Product
            id="1237"
            title="The lean startup"
            price={2.33}
            image="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg"
            rating={5}
          />
          {/*Product*/}
          <Product
            id="1238"
            title="The lean startup"
            price={2.33}
            image="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product
            id="1239"
            title="The lean startup"
            price={2.33}
            image="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
