import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { map } from 'lodash';

import ProductItem from '../Component/ProductItem';
import products from '../../mockup/data';

const H1 = styled.h1`
  size: 50px;
`;

const Shop = ({ handleAdd }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={16}>
        <H1> Shop </H1>
      </Grid.Column>
      {map(products, (product) => (
        <Grid.Column key={product.id} width={3}>
          <ProductItem handleAdd={handleAdd} {...product} itemForCart={false} />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

Shop.propTypes = {
  handleAdd: PropTypes.func,
};
export default Shop;
