import React, { Component } from 'react';
import FormHooks from './FormHooks';

class Main extends Component {
  render() {
    // const { page } = this.state;
    return (
      <main className="page-main">
        <div className="container">
          <FormHooks />
        </div>
      </main>
    );
  }


   // constructor(props) {
  //   super(props);
  //   this.state = {
  //     page: 'home'
  //   }
  // }

  // handleChangePage(page) {
  //   this.setState({ page: page })
  // }
  
}

export default Main;
