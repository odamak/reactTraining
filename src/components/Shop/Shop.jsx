import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { map } from 'lodash';

import ProductItem from '../Component/ProductItem';
import products from '../../mockup/data';

const H1 = styled.h1`
  size: 50px;
`;

const Shop = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={16}>
        <H1> Shop </H1>
      </Grid.Column>
      {map(products, (product) => (
        <Grid.Column key={product.id} width={3}>
          <ProductItem {...product} />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

// const Shop = () => (
//   <Grid celled>
//     <Grid.Row>
//       <Grid.Column width={16}>
//         <H1> Shop </H1>
//       </Grid.Column>
//       <Grid.Column width={3}>
//         <ProductItem />
//       </Grid.Column>
//       <Grid.Column width={3}>
//         <ProductItem />
//       </Grid.Column>
//       <Grid.Column width={3}>
//         <ProductItem />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// );


export default Shop;
