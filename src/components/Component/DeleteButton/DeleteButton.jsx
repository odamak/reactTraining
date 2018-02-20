import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const DeleteButton = ({
  id, name, price,
  description, handleRemove,
}) => (
  <Button
    onClick={() => handleRemove({
      id,
      name,
      price,
      description,
    })}
  >Remove product
  </Button>
);

DeleteButton.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  handleRemove: PropTypes.func,
};

export default DeleteButton;
