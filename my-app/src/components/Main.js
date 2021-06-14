import React, { Component } from 'react';
import Circle from './Circle';

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
          <div className="main-wrap">
            <div className="btn-list">
              <button onClick={() => this.handleChangePage('home')}>HOME</button>
              <button onClick={() => this.handleChangePage('about')}>ABOUT</button>
            </div>
            {(page === 'home') &&
              <ul className="circle-list">
                <Circle number={50} size={50} />
                <Circle number={40} size={50} />
                <Circle number={30} size={50} />
              </ul>
            }
            {(page === 'about') && <div>About page</div>}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
