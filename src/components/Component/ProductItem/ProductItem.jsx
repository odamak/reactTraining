import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import IMAGES from '../../../asset';
import AddToCartButton from '../AddToCartButton';
import DeleteButton from '../DeleteButton';

const ProductItem = ({
  id, name, price, description, quantity, handleAdd, itemForCart,
}) => {
  const productInfo = {
    id,
    name,
    price,
    description,
    quantity,
    handleAdd,
  };
  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={IMAGES.HEMP} />
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
      { itemForCart && <DeleteButton />}
    </div>
  );
};
ProductItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  handleAdd: PropTypes.func,
  itemForCart: PropTypes.bool,

};

export default ProductItem;
