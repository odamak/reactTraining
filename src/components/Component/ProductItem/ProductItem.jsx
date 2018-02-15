import React from 'react';
// import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

import IMAGES from '../../../asset';
import AddToCartButton from '../AddToCartButton';
import DeleteButton from '../DeleteButton';


const ProductItem = () => (
  <div>
    <Item.Group>
      <Item>
        <Item.Image size="tiny" src={IMAGES.HEMP} />
        <Item.Content>
          <Item.Header as="a">Header</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <AddToCartButton />
    <DeleteButton />
  </div>
);

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default ProductItem;
