import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { findIndex } from 'lodash';

import Shop from '../Shop';
import Cart from '../Cart';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(productToAdd) {
    const { products } = this.state;
    const indexProductToBeUpdated = findIndex(
      products,
      (product) => product.id === productToAdd.id
    );
    if (indexProductToBeUpdated !== -1) {
      products[indexProductToBeUpdated].quantity += 1;
    } else {
      products.push({ ...productToAdd, quantity: 1 });
    }
    this.setState(() => ({
      products,
    }));

    console.log(this.state);
    console.log(typeof this.state.products);
  }

  handleRemove() {

  }
  render() {
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={13}>
            <Shop handleAdd={this.handleAdd} />
          </Grid.Column>
          <Grid.Column width={3}>
            <Cart products={this.state.products} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Page;
