import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

export function getProductsStart() {
  return {
    type: constants.PRODUCTS_GET_START,
  };
};

export function getProductsSucccess({ products, total, took, numberProductsToDisplay}) {
  return {
    type: constants.PRODUCTS_GET_SUCCESS,
    payload: {
      data: products,
      total,
      took: took * 0.001,
      numberProductsToDisplay
    }
  };
};

export function getProductsError(error) {
  return {
    type: constants.PRODUCTS_GET_ERROR,
    payload: {
      error
    }
  };
};

export function getProducts( categoryName = "", page = 0, phrase = "") {
  return (dispatch) => {
    dispatch(getProductsStart());
    fetch(`http://localhost:7000/search?page=${page}&phrase=${phrase}&category=${categoryName}`)
			.then(response => response.json())
      .then(data => {
        dispatch(getProductsSucccess(data));
      })
      .catch(error => dispatch(getProductsError(error)))
  };
};