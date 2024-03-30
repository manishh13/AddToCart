import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlicer";
function Products() {
  const [product, setProduct] = useState([]);

  const myDispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) =>
      data.json().then((result) => setProduct(result))
    );
  }, []);

  const card = product.map((key) => (
    <div className="product-div">
      <div className="product-img-div">
        <img src={key.image} />
      </div>
      <p
        className="product-des"
        style={{ textWrap: "wrap", textAlign: "center" }}
      >
        {key.title}
      </p>
      <h2 className="product-price">Rs:{key.price}</h2>
      <button onClick={() => myDispatch(addToCart(key))}>Add to Cart</button>
    </div>
  ));

  return (
    <>
      <h1>This is Product Page</h1>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {card}
      </div>
      {/* {JSON.stringify(product)} */}
    </>
  );
}

export default Products;
