import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


import Shop from '../Shop';
import Cart from '../Cart';

class Page extends Component {
  state = {
    // product: [],
  };

  handleAdd(e) {
    console.log(e);
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
            <Cart />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Page;
