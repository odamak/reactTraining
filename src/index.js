import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { remove } from 'lodash';


import './index.css';
import App from './App';

// const addToCartReducer = (state = {})


const initialState = {
  products: [],
};

const removeProduct = (state, productToDelete) => {
  const { products } = state;
  remove(products, (product) => productToDelete.id === product.id);
  return {
    ...state,
    products,
  };
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'REMOVE_PRODUCT':
      return removeProduct(state, action.payload);
    default:
      return state;
  }
};

const store = createStore(productsReducer);

store.subscribe(() => {
  console.log('Store updated!', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
