import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import todoimg from '../src/components/todoimg.jpg'

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
    
    <div style={{ backgroundColor: '#38D6C0', minHeight: '100vh', padding: '16px',backgroundImage:`url(${todoimg})`}}>
      <div style={{ padding: '16px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '24px', margin: '32px 0', color:'#01110F',fontStyle:'bold',}}><u>Book List</u></h1>
          <Link to='/List/create'>
            <MdOutlineAddBox style={{ color: '#0369a1', fontSize: '32px', cursor: 'pointer' }} />
          </Link>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#0369a1' }}>Loading...</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '3px', backgroundColor: '#e0f7fa', textAlign: 'left' }}>Index</th>
                <th style={{ border: '1px solid #ddd', padding: '3px', backgroundColor: '#e0f7fa', textAlign: 'left' }}>Title</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#e0f7fa', textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo._id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f1f1f1' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{todo.Title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link to={`/List/details/${todo._id}`} style={{ marginBottom: '8px' }}>
                      <BsInfoCircle style={{ color: '#1e3a8a', fontSize: '24px' }} />
                    </Link>
                    <Link to={`/List/edit/${todo._id}`} style={{ marginBottom: '8px' }}>
                      <AiOutlineEdit style={{ color: '#059669', fontSize: '24px'}} />
                    </Link>
                    <Link to={`/List/delete/${todo._id}`}>
                      <MdOutlineDelete style={{ color: '#dc2626', fontSize: '24px', cursor: 'pointer' }} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    
  );
}

export default Home;
