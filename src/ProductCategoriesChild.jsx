import React, { useContext } from "react";
import { Context } from "./ProductContext";

function ProductCategoriesChild() {
  const context = useContext(Context);

  console.log(context);

  return <div>ProductCategoriesChild</div>;
}

export default ProductCategoriesChild;
