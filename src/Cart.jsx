import React from "react";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "./CartSlicer";
function Cart() {
  const mySelector = useSelector((state) => state.storeReducer);
  const myDispatch = useDispatch();
  const card = mySelector.map((key) => (
    <div className="product-div" style={{ width: "100%", height: "5%" }}>
      <div className="product-img-div" style={{ width: "20%" }}>
        <img src={key.image} />
      </div>
      <p
        className="product-des"
        style={{ textWrap: "wrap", textAlign: "center" }}
      >
        {key.title}
      </p>
      <h2 className="product-price">Rs:{key.price}</h2>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          fontWeight: "bold",
        }}
        onClick={() => {
          myDispatch(removeToCart(key.id));
        }}
      >
        Remove
      </button>
    </div>
  ));
  return (
    <>
      <h1>This is Cart Page</h1>
      <div className="cart-div">{card}</div>
    </>
  );
}

export default Cart;
