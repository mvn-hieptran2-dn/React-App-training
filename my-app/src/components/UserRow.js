import React, { Component } from 'react'
import close from './../img/close.png';

export default class UserRow extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove = () => {
    this.props.onRemoveUser(this.props.user.id);
  }

  render() {
    const user = this.props.user;
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td className="txt-center">{user.country}</td>
        <td className="txt-center">{user.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{user.other}</td>
        <td className="txt-center">
          <button className="btn-remove" onClick={this.handleRemove}>
            <img src={close} alt="close-btn"/>
          </button>
        </td>
      </tr>
    )
  }
}
