import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const AddToCartButton = ({ handleAdd }) => (
  <Button onClick={() => handleAdd('111')}>Add to cart</Button>
);

AddToCartButton.propTypes = {
  handleAdd: PropTypes.func,
};

export default AddToCartButton;
