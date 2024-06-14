import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function Home() {
  const [todos, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5556/List')
      .then((response) => {
        setTodo(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '24px', margin: '32px 0' }}>Book List</h1>
        <Link to='/List/create'>
          <MdOutlineAddBox style={{ color: '#0369a1', fontSize: '32px' }} />
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Index</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo._id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{index + 1}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{todo.Title}</td>
                <td style={{ border: '1px solid black', padding: '8px', display: 'flex', gap: '8px' }}>
                  <Link to={`/List/details/${todo._id}`}>
                    <BsInfoCircle style={{ color: '#1e3a8a', fontSize: '24px' }} />
                  </Link>
                  <Link to={`/List/edit/${todo._id}`}>
                    <AiOutlineEdit style={{ color: '#059669', fontSize: '24px' }} />
                  </Link>
                  <button
                    onClick={() => handleDelete(todo._id)}
                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    <MdOutlineDelete style={{ color: '#dc2626', fontSize: '24px' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
