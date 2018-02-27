import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
// import { findIndex, remove } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Shop from '../Shop';
import Cart from '../Cart';

const Page = (props) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={13}>
        <Shop handleAdd={props.addProduct} />
      </Grid.Column>
      <Grid.Column width={3}>
        <Cart handleRemove={props.removeProduct} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  },
  removeProduct: (product) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: product,
    });
  },
});

Page.propTypes = {
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
