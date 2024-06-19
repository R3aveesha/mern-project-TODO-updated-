import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodo = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5556/List/${id}`)
    .then((response)=>{
      setTitle(response.data.Title)
      setLoading(false);
      alert('an error happend, please checj the console')
    })
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { Title: title };

    setLoading(true);

    try {
      await axios.put('http://localhost:5556/List', data);
      setLoading(false);
      navigate('/List'); // Navigate to home or another route after successful post
    } catch (error) {
      setLoading(false)
      console.error('There was an error creating the todo!', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button
          type="submit"
          style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
};

export default EditTodo;
