import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { filter, isEmpty } from 'lodash';

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
    if (products.length === 0) {
      products.push({ ...productToAdd, quantity: 1 });
    } else {
      const productToBeUpdated = filter(
        products,
        (product) => product.id === productToAdd.id
      );
      if (!isEmpty(productToBeUpdated)) {
        productToBeUpdated.quantity += 1;
        const updatedProducts = filter(
          products,
          (product) => product.id !== productToAdd.id
        );
        updatedProducts.push(productToBeUpdated);
      } else {
        products.push({ ...productToAdd, quantity: 1 });
      }
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
