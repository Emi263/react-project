import React, { useContext } from "react";
import { Context } from "./ProductContext";

function ListOfProduct(props) {
  const context = useContext(Context);

  return (
    <div>
      {context.products.map((prod) => {
        return (
          <li
            onClick={() => {
              const updatedProducts = context.products.filter((product) => {
                if (product.name === prod.name) {
                  return false;
                }
                return true;
              });
              context.setProducts(updatedProducts);
              console.log({ updatedProducts });
            }}
            key={prod.name}
          >
            {prod.name}
          </li>
        );
      })}
    </div>
  );
}

export default ListOfProduct;
