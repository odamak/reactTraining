import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import ProductItem from '../Component/ProductItem';

const H1 = styled.h1`
  size: 50px;
`;

const Cart = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={16}>
        <H1> Cart </H1>
      </Grid.Column>
      <Grid.Column width={16}>
        <ProductItem />
      </Grid.Column>
      <Grid.Column width={16}>
        <ProductItem />
      </Grid.Column>
      <Grid.Column width={16}>
        <ProductItem />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Cart;
