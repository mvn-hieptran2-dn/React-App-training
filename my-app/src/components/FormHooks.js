import React, {useState} from 'react';
import close from './../img/close.png';

let id = 0;

const FormHooks = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    skill: '',
    gender: '0',
    info: ''
  });

  const [users, setUsers] = useState([]);

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    id += 1;
    const newUser = { ...form, id };
    setUsers([...users, newUser]);
  }

  function handleRemove(id){
    const newUsers = users.filter(e => e.id !== id);
    setUsers(newUsers);
    // this.setState(prev => ({
    //   users: prev.users.filter(item => item.id !== id)
    // }));
  }

  
  return (
    <div className="form-wrap d-flex">
      <div className="form-register">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address: </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your Country: </label>
            <div className="form-select">
              <select name="country" value={form.country} onChange={handleChange}>
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
                onChange={handleChange} />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form-radio">
              <input
                type="radio"
                name="gender"
                id="female"
                value="1"
                checked={form.gender === '1'}
                onChange={handleChange} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label>Other Information: </label>
            <textarea name="other" onChange={handleChange}></textarea>
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
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td className="txt-center">{user.country}</td>
                  <td className="txt-center">{user.gender === '0' ? 'Male' : 'Female'}</td>
                  <td>{user.other}</td>
                  <td className="txt-center">
                    <button className="btn-remove" onClick={() => handleRemove(user.id)}>
                      <img src={close} alt="close-btn" />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormHooks;
