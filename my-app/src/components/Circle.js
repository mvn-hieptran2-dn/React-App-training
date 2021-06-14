import React, { Component } from 'react';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
      btnText: true,
    }
  }

  countdown() {
    if (this.state.btnText) {
      this.setState({
        number: this.state.number - 1
      })
    }
    else {
      this.setState({
        number: this.state.number
      })
    }
  }

  handleChangeAction() {
    this.setState({
      btnText: !this.state.btnText
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.countdown();
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.number === 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { btnText } = this.state
    const { size } = this.props
    const styles = {
      width: size,
      height: size,
    };
    return (
      <li className="circle-item">
        <button onClick={() => this.handleChangeAction()}>{btnText ? 'Stop' : 'Start'}</button>
        <div className="circle" style={styles}>
          {this.state.number}
        </div>
      </li>
    );
  }
}
export default Circle;
