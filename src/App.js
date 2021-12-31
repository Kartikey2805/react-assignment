import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import Filter from "./Filter";
import axios from "axios";
import { connect } from "react-redux";

function App(props) {
  // const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const data = await axios.get("https://assessment-edvora.herokuapp.com");
      let products = await data.data;
      console.log(products);
      let obj = {
        actualStates: products,
        filteredStates: products,
      };
      console.log(obj);
      props.filterProduct(obj);
    }
    fetch();
    setLoading(false);
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div className="app">
        <div className="filter">
          <Filter />
        </div>
        <div className="allproducts">
          <AllProducts />
        </div>
      </div>
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    filterProduct: (filter) => {
      dispatch({ type: "FILTER_PRODUCT", payload: filter });
    },
  };
};

export default connect(null, mapDispatchtoProps)(App);
