import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const AddToCartButton = ({
  id, name, price,
  description, handleAdd,
}) => (
  <Button
    onClick={() => handleAdd({
      id,
      name,
      price,
      description,
    })}
  >Add to cart
  </Button>
);

AddToCartButton.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  handleAdd: PropTypes.func,
};

export default AddToCartButton;
