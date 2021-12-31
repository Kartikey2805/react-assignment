import React, { useState, useEffect } from "react";
import Product from "./Product";
import { connect } from "react-redux";

const AllProducts = (props) => {
  const [loading, setLoading] = useState(true);
  const [productsByBrand, setProductsByBrand] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    function FetchAllProducts() {
      const products = props.state.filterReducer.filteredStates;
      console.log(products);
      let allProductsByBrand = {};
      for (let index = 0; index < products.length; index++) {
        let brand = products[index].brand_name;
        // console.log(brand);
        if (allProductsByBrand[brand] === undefined) {
          allProductsByBrand[brand] = [];
        }
        allProductsByBrand[brand].push(products[index]);
      }
      setProductsByBrand(allProductsByBrand);
      console.log(allProductsByBrand);
    }
    FetchAllProducts();
    setLoading(false);
  }, [props]);

  return (
    <div>
      {" "}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Edvora</h1>
          <h3>Products</h3>
          {Object.entries(productsByBrand).map(([brand, prod], i) => {
            return (
              <div>
                <p>{brand}</p>
                <hr></hr>
                <div
                  className="scroll"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    overflow: "scroll",
                  }}
                >
                  {prod.map((each_prod) => {
                    return (
                      <div>
                        <Product product={each_prod} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    filterProduct: (filter) => {
      dispatch({ type: "FILTER_PRODUCT", payload: filter });
    },
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(AllProducts);
