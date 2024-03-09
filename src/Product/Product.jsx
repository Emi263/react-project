import React from "react";

function Product(props) {
  console.log(props);
  const isOutOfStock = props.product.quantity === 0 ? true : false;
  console.log({ isOutOfStock });

  return (
    <div style={{ backgroundColor: isOutOfStock ? "red" : "white" }}>
      Name: {props.product.name}
      <br />
      Quantity: {props.product.quantity}
      <br />
      {isOutOfStock ? <p style={{ color: "red" }}>Product is Out of stock</p> : null}
      <br />
      <br />
    </div>
  );
}

export default Product;
