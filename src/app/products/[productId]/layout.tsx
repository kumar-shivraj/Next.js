import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h2>Features products</h2>
      {/* carousel here */}
    </>
  );
};

export default ProductDetailsLayout;
