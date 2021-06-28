import React from 'react';
import UserRow from './UserRow';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        skill: '',
        gender: '0',
        info: ''
      },
      listUser: [],
    }
    this.id = 0;
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }));
    console.log(e);
  }

  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    this.id = this.id + 1;
    const user = { ...this.state.form, id: this.id };
    this.setState(prev => ({
      listUser: [
        ...prev.listUser,
        user
      ]
    }))
  }

  handleRemove = (id) => {
    this.setState(prev => ({
      listUser: prev.listUser.filter(item => item.id !== id)
    }));
  }

  render() {
    const form = this.state.form;
    const users = this.state.listUser;
    return (
      <div className="form-wrap d-flex">
        <div className="form-register">
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email Address: </label>
            <input 
              type="text"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your Country: </label>
            <div className="form-select">
              <select name="country" value={form.country} onChange={this.handleChange}>
                <option value="">Please choose</option>
                <option value="Viet Nam">Viet Nam</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Japan">Japan</option>
                  <option value="Korea">Korea</option>
                  <option value="Canada">Canada</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Italy">Italy</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Gender: </label>
            <div className="form-radio">
              <input
                type="radio"
                name="gender"
                id="male"
                value="0"
                checked={form.gender === '0'}
                onChange={this.handleChange} />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form-radio">
              <input
                type="radio"
                name="gender"
                id="female"
                value="1"
                checked={form.gender === '1'}
                onChange={this.handleChange} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label>Other Information: </label>
            <textarea name="other" onChange={this.handleChange}></textarea>
          </div>
          <div>
            <button className="btn-submit">Submit</button>
          </div>
        </form>
        </div>
        <div className="table-register">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email Address</th>
                <th className="txt-center">Country</th>
                <th className="txt-center">Gender</th>
                <th>Info</th>
                <th className="txt-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.length ? users.map((user) =>
                  <UserRow key={user.id} user={user} onRemoveUser={this.handleRemove} />)
                : <tr>
                    <td className="txt-center" colSpan="6">No user found</td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Form;
