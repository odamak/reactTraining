import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import IMAGES from '../../../asset';
import AddToCartButton from '../AddToCartButton';
import DeleteButton from '../DeleteButton';


const ProductItem = ({ name, price, description }) => (
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
        </Item.Content>
      </Item>
    </Item.Group>
    <AddToCartButton />
    <DeleteButton />
  </div>
);

ProductItem.propTypes = {
  // id: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,

};

export default ProductItem;
