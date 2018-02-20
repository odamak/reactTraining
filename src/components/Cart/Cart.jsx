import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import ProductItem from '../Component/ProductItem';

const H1 = styled.h1`
  size: 50px;
`;

const Cart = ({ products }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={16}>
        <H1> Cart </H1>
      </Grid.Column>
      {products.map((item) => (
        <Grid.Column width={16} key={uniqueId('product_')}>
          <ProductItem {...item} itemForCart />
        </Grid.Column>))
      }
    </Grid.Row>
  </Grid>
);

Cart.propTypes = {
  products: PropTypes.array,
};

export default Cart;
