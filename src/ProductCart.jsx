import React, { useContext } from "react";
import { Context } from "./ProductContext";

function ProductCart() {
  const context = useContext(Context);
  const products = context.products;
  let total = 0;

  products.forEach((prod) => {
    total += prod.quantity * prod.price;
  });

  console.log({ total });
  return <div>Total: {total}</div>;
}

export default ProductCart;
