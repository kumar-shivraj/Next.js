import React from "react";

function ProductDetails({ params }: { params: { productId: string } }) {
  return <h1>Details about the Product {params.productId}</h1>;
}

export default ProductDetails;
