import React from "react";

const Product = (props) => {
  const { product } = props;
  return (
    <div
      style={{
        backgroundColor: "#050505",
        width: "300px",
        fontSize: "70%",
        borderRadius: "5%",
        margin: "10px",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "55%" }}>
          <div
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "100px",
              margin: "18px",
            }}
          ></div>
          <p style={{ marginLeft: "18px" }}>
            {" "}
            {product.address.city}, {product.address.state}
          </p>
        </div>
        <div style={{ maxWidth: "40%" }}>
          <p>{product.product_name}</p>
          <p>{product.brand_name}</p>
          <p>{product.date}</p>
        </div>
      </div>
      <div style={{ margin: "0 0 10px 20px" }}>
        <p>{product.discription}</p>
      </div>
    </div>
  );
};

export default Product;
