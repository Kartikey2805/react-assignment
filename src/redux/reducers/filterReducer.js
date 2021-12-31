import React from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialState = {
  actualStates: [],
  filteredStates: [],
  product: "product",
  state: "state",
  city: "city",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_PRODUCT":
      // console.log(action.payload);
      let obj = action.payload;
      let newState = {
        ...state,
        ...obj,
      };
      // console.log(newState);
      let newFiltered = newState.actualStates;
      if (newState.product === "product") {
        newState = {
          ...newState,
          filteredStates: newState.actualStates,
          product: "product",
          state: "state",
          city: "city",
        };
        return newState;
      }

      newFiltered = newFiltered.filter(
        (ele) => newState.product === ele.product_name
      );
      newState = {
        ...newState,
        filteredStates: newFiltered,
      };
      if (newState.state === "state") return newState;
      newFiltered = newFiltered.filter(
        (ele) => newState.state === ele.address.state
      );
      newState = {
        ...newState,
        filteredStates: newFiltered,
      };

      if (newState.city === "city") return newState;
      newFiltered = newFiltered.filter(
        (ele) => newState.city === ele.address.city
      );
      newState = {
        ...newState,
        filteredStates: newFiltered,
      };
      return newState;

    default:
      return state;
  }
};

export default filterReducer;
