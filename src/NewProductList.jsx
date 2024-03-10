import { useState } from "react";
import ProductCategories from "./ProductCategories";
import ProductCart from "./ProductCart";
import ListOfProduct from "./ListOfProduct";
import { Context } from "./ProductContext";

function NewProductList() {
  const [products, setProducts] = useState([
    { name: "Apple", price: 45, category: "Fruit", quantity: 3, isInOffer: false },
    { name: "Orange", price: 40, category: "Vegetable", quantity: 31, isInOffer: true },
    { name: "Kiwi", price: 10, category: "Fruit", quantity: 45, isInOffer: false },
    { name: "iPhone", price: 45, category: "Electronics", quantity: 6, isInOffer: true },
    { name: "Pear", price: 45, category: "Fruit", quantity: 3, isInOffer: false },
    { name: "Mandarin", price: 45, category: "Fruit", quantity: 45, isInOffer: true },
    { name: "Lemon", price: 45, category: "Electronics", quantity: 10, isInOffer: false },
  ]);

  return (
    <Context.Provider value={{ products, setProducts, name: "" }}>
      <ProductCategories />
      <br />
      <br />
      <ProductCart />
      <br />
      <br />
      <ListOfProduct />
    </Context.Provider>
  );
}

export default NewProductList;
