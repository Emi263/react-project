import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ProductList from "./ProductList";

function Ecommerce() {
  const [products, setProducts] = useState([
    { name: "Apple", price: 45, quantity: 3, isInOffer: false },
    { name: "Orange", price: 40, quantity: 31, isInOffer: true },
    { name: "Kiwi", price: 10, quantity: 1, isInOffer: false },
    { name: "Banana", price: 45, quantity: 6, isInOffer: true },
    { name: "Apple", price: 45, quantity: 3, isInOffer: false },
    { name: "Mandarin", price: 45, quantity: 6, isInOffer: true },
    { name: "Lemon", price: 45, quantity: 10, isInOffer: false },
  ]);

  return (
    <div>
      <ShoppingCart productList={products} />
      <ProductList productList={products} handleSetProducts={setProducts} />
    </div>
  );
}

export default Ecommerce;
