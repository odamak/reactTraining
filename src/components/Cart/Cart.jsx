import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { uniqueId, map } from 'lodash';
import ProductItem from '../Component/ProductItem';

const H1 = styled.h1`
  size: 50px;
`;

const Cart = ({ products, handleRemove }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={16}>
        <H1> Cart </H1>
      </Grid.Column>
      {map(products, (product) => (
        <Grid.Column width={16} key={uniqueId('product_')}>
          <ProductItem {...product} handleRemove={handleRemove} itemForCart />
        </Grid.Column>))
      }
    </Grid.Row>
  </Grid>
);

Cart.propTypes = {
  products: PropTypes.array,
  handleRemove: PropTypes.func,
};

export default Cart;
