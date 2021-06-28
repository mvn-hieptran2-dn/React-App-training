import React, { Component } from 'react';
import From from './Form';
import Circle from './Circle';
import { from } from 'zen-observable';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }

  handleChangePage(page) {
    this.setState({ page: page })
  }

  render() {
    const { page } = this.state;
    return (
      <main className="page-main">
        <div className="container">
          <From />
        </div>
      </main>
    );
  }
}

export default Main;
