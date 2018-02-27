import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import AddToCartButton from '../AddToCartButton';
import DeleteButton from '../DeleteButton';

const ProductItem = ({
  id, name, price, description, image, quantity, handleAdd, itemForCart, handleRemove,
}) => {
  const productInfo = {
    id,
    name,
    price,
    description,
    image,
    quantity,
    handleAdd,
    handleRemove,
  };
  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={image} />
          <Item.Content>
            <Item.Header as="a">{name}</Item.Header>
            <Item.Description>
              {description}
            </Item.Description>
            <Item.Description>
            Price {price}
            </Item.Description>
            {itemForCart &&
            <Item.Description>
            Quantity {quantity}
            </Item.Description>}
          </Item.Content>
        </Item>
      </Item.Group>
      { !itemForCart && <AddToCartButton {...productInfo} />}
      { itemForCart && <DeleteButton {...productInfo} />}
    </div>
  );
};
ProductItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  quantity: PropTypes.number,
  itemForCart: PropTypes.bool,
  handleAdd: PropTypes.func,
  handleRemove: PropTypes.func,

};

export default ProductItem;
