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
            title="HUG 'n' FEEL SOFT TOYS Elephant Soft Toys, Elephant Toys for Kids, Birthday Gift for Girls/Wife, Boyfriend/Husband, Wedding for Couple Special, Rakhi for Brother/Sister Gift Items, (30 cm)"
            price={378}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFIKWOuMiXyd9gZDPZPBfN4bxJQOH1hw_xA&usqp=CAU"
          />
          {/*Product*/}
          <Product
            id="1235"
            title="Webby Walkie Talkie Toy with Range Upto 100 Feet (Multi-Color)"
            price={551}
            rating={3}
            image="https://m.media-amazon.com/images/I/518mylcqo9L._SY355_.jpg"
          />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product
            id="1236"
            title="Babique Elephant Sitting Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls (Blue, 30 cm)"
            price={551}
            image="https://m.media-amazon.com/images/I/71sh-Yt3EmL._SY355_.jpg"
            rating={3}
          />
          {/*Product*/}
          <Product
            id="1237"
            title="Lean Startup: How to Apply the Lean Startup Methodology to Innovate, Accelerate, and Create Successful Businesses (Lean Guides with Scrum, Sprint, Kanban, DSDM, XP & Crystal)"            price={2.33}
            image="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg"
            rating={3}
          />
          {/*Product*/}
          <Product
            id="1238"
            title="Storio Blaze Storm Hot Fire Soft Bullet Gun Toy with 10 Safe Soft Foam Bullets"
            price={2.33}
            image="https://m.media-amazon.com/images/I/71HwYi43pUL._SY355_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product
            id="1239"
            title="Toyshine 2 in 1 Baby Piano Xylophone Toy for Toddlers 1-3 Years Old, 8 Multicolored Key Keyboard Xylophone Piano, Preschool Educational Musical Learning Instruments Toy for Baby Kids Girls Boys"
            price={799}
            image="https://m.media-amazon.com/images/I/61FEEaUCw2L._SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
