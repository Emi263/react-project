import React, { useContext } from "react";
import ProductCategoriesChild from "./ProductCategoriesChild";
import { Context } from "./ProductContext";

function ProductCategories() {
  const context = useContext(Context);

  const categories = context.products.map((product) => product.category);
  const allCategories = ["Fruit", "Vegetable", "Fruit", "Electronics", "Fruit", "Fruit", "Electronics"];

  // const newArray = [];

  // allCategories.forEach((item) => {
  //   if (!newArray.includes(item)) {
  //     newArray.push(item);
  //   }
  // });

  const filteredCategories = [...new Set(categories)];

  return (
    <div>
      {filteredCategories.map((category) => {
        return <li key={category}>{category}</li>;
      })}
      <ProductCategoriesChild />
    </div>
  );
}

export default ProductCategories;
