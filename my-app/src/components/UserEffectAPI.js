import React, { useEffect, useState } from 'react';

const UserEffectAPI = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [listNum, setListNum] = useState([])
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json())
      .then(req => {
        setUsers(req.data)
        setTotalPages(req.total_pages)
      })
  }, [page]);

  useEffect(() => {
    let arrayList = []
    for (let i = 1; i <= totalPages; i++) {
      arrayList.push(i)
    }
    setListNum(arrayList)
  }, [totalPages])

  const prevPage = (e) => {
    if (e === 0) {
      setPage(page - 1)
    } else {
      setPage(page + 1)
    }
  }

  const handleChange = (e) => {
    setPage(e)
  }
  return (
    <div>
      <table className="table table-user">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((e) =>
              <tr key={e.id}>
                <td>{e.id}</td>
                <td><div className="thumb-img"><img className="avatar" src={e.avatar} /></div></td>
                <td>{e.email}</td>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
              </tr>
            )}
        </tbody>
      </table>
      <ul className='d-flex list-page'>
        <li className="btn btn-prev">
          <button disabled={page === 1} onClick={() => prevPage(0)}>Prev</button>
        </li>
        {
          listNum.map((e) =>
            <li key={e} className="num-page">
              <button onClick={() => handleChange(e)} className={e === page ? 'active' : ''}>{e}</button>
            </li>
          )
        }
        <li className="btn btn-next">
          <button disabled={page === totalPages} onClick={() => prevPage(1)} >Next</button>
        </li>
      </ul>
    </div>
  );
};

export default UserEffectAPI;
