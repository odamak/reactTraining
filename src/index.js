import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { remove, findIndex } from 'lodash';


import './index.css';
import App from './App';

// const addToCartReducer = (state = {})


const initialState = {
  products: [],
};

// function to be called in case 'ADD_PRODUCT' in the reducer "productsReducer"
const addProduct = (state, productToAdd) => {
  const { products } = state;
  const indexProductToBeUpdated = findIndex(
    products,
    (product) => product.id === productToAdd.id
  );
  if (indexProductToBeUpdated !== -1) {
    products[indexProductToBeUpdated].quantity += 1;
  } else {
    products.push({ ...productToAdd, quantity: 1 });
  }
  return {
    ...state,
    products: [...products],
  };
};

// function to be called in case 'REMOVE_PRODUCT' in the reducer "productsReducer"
const removeProduct = (state, productToDelete) => {
  const { products } = state;
  const indexProductToBeUpdated = findIndex(
    products,
    (product) => product.id === productToDelete.id
  );
  if (indexProductToBeUpdated !== -1 && products[indexProductToBeUpdated].quantity >= 2) {
    products[indexProductToBeUpdated].quantity -= 1;
    return {
      ...state,
      products: [...products],
    };
  }
  const productsAfterRemove = remove(products, (product) => productToDelete.id !== product.id);
  return {
    ...state,
    products: [...productsAfterRemove],
  };
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return addProduct(state, action.payload);
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
