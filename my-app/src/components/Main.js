import React, { Component } from 'react';
import Circle from './Circle';
import close from './../img/close.png';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      itemList: [
        {
          id: 1,
          color: 'red',
          content: 'lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 2,
          color: 'yellow',
          content: 'lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 3,
          color: 'green',
          content: 'lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 4,
          color: 'blue',
          content: 'lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 5,
          color: 'pink',
          content: 'lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
      ]
    }
  }

  removeItem(index) {
    var { itemList } = this.state;
    itemList.splice(index, 1);
    this.setState({
      itemList
    });
  }

  handleChangePage(page) {
    this.setState({ page: page })
  }

  render() {
    const { page } = this.state;
    const { itemList } = this.state;
    return (
      <main className="page-main">
        <div className="container">
          <div className="main-wrap">
            <div className="btn-list">
              <button onClick={() => this.handleChangePage('home')}>HOME</button>
              <button onClick={() => this.handleChangePage('about')}>ABOUT</button>
              <button onClick={() => this.handleChangePage('list')}>LIST</button>
            </div>
            {(page === 'home') &&
              <ul className="circle-list">
                <Circle number={50} size={50} />
                <Circle number={40} size={50} />
                <Circle number={30} size={50} />
              </ul>
            }
            {(page === 'about') && <div>About page</div>}
            {(page === 'list') &&
            <div>
              {itemList.length ?
              <ul className="list-color">
              {itemList.map((i, index) =>
                <li className="item-color">
                  <div className="box-color" style={{ backgroundColor: i.color }}></div>
                  <div className="content">
                    <h4>This is title {i.id}</h4>
                    <p>{i.content}</p>
                  </div>
                  <button onClick={() => this.removeItem(index)}>
                    <img src={close} alt="close-btn" />
                  </button>
                </li>
              )}
              </ul>
              : <p> You have belt ! </p>}
            </div>}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
