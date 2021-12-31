import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Filter = (props) => {
  const [products, setproducts] = useState([]);
  const [states, setstates] = useState([]);
  const [city, setcity] = useState([]);

  const My_filter = (state) => {
    return state.filter((v, i, a) => a.indexOf(v) === i);
  };

  useEffect(() => {
    let filteredState = props.state.filterReducer.filteredStates;
    console.log(filteredState);
    let filproducts = [],
      filstate = [],
      filcity = [];
    filteredState.forEach((ele) => {
      filproducts.push(ele.product_name);
      filstate.push(ele.address.state);
      filcity.push(ele.address.city);
    });

    setproducts(My_filter(filproducts));
    setstates(My_filter(filstate));
    setcity(My_filter(filcity));

    console.log(products);
    console.log(states);
    console.log(city);

    console.log(products);
  }, [props]);

  return (
    <div className="filter_box">
      <p style={{ textAlign: "center" }}>
        <b>Filters</b>
      </p>
      <hr></hr>
      <select
        className="drop_down"
        style={{ width: "90%", textAlign: "center" }}
        name="cars"
        id="cars"
        onChange={(e) => {
          let newprod = e.target.value;
          console.log(newprod);
          props.filterProduct({
            product: newprod,
          });
        }}
      >
        <option value="product">product</option>
        {products.map((prod) => {
          return <option value={prod}>{prod}</option>;
        })}
      </select>
      <select
        className="drop_down"
        style={{ width: "90%", textAlign: "center" }}
        name="cars"
        id="cars"
        onChange={(e) => {
          let newState = e.target.value;
          props.filterProduct({
            state: newState,
          });
        }}
      >
        <option value="state">state</option>
        {states.map((state) => {
          return <option value={state}>{state}</option>;
        })}
      </select>

      <select
        className="drop_down"
        style={{ width: "90%", textAlign: "center" }}
        name="cars"
        id="cars"
        onChange={(e) => {
          let newcity = e.target.value;
          props.filterProduct({
            city: newcity,
          });
        }}
      >
        <option value="city">city</option>
        {city.map((prod) => {
          return <option value={prod}>{prod}</option>;
        })}
      </select>
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

export default connect(mapStateToProps, mapDispatchtoProps)(Filter);
