import React from "react";

function ProductList(props) {
  function removeProduct() {
    const filteredProducts = props.productList.filter((prod) => prod.name !== "Apple");
    props.handleSetProducts(filteredProducts);
  }

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {props.productList.map((prod, index) => {
        return <div key={prod.name + index}>{prod.name}</div>;
      })}
      <button onClick={removeProduct}>Remove</button>
    </div>
  );
}

export default ProductList;
