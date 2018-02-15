import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';


import Shop from '../Shop';
import Cart from '../Cart';


const Page = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={13}>
        <Shop />
      </Grid.Column>
      <Grid.Column width={3}>
        <Cart />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Page;
