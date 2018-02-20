import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


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

  handleAdd(e) {
    const { products } = this.state;
    products.push(e);
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
            {this.state.products.length > 0 && this.state.products.map((item) => item.name)}
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
