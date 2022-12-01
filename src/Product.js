import React from "react";
import "./Product.css";

function Product(title, image, price, rating) {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>2.33</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/51aoe6r1ibL.jpg" alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
