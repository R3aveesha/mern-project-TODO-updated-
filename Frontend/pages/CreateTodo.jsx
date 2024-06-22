import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import createimg from '../src/components/createimg.jpg';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [Note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { Title: title, SpecialNote: Note };

    setLoading(true);

    try {
      await axios.post('http://localhost:5556/List', data);
      setLoading(false);
      navigate('/List'); // Navigate to home or another route after successful post
    } catch (error) {
      setLoading(false);
      console.error('There was an error creating the todo!', error);
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.header}>Create Todo</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={styles.input}
            />
            <label htmlFor="SpecialNote" style={styles.label}>Special Note</label>
            <input
              type="text"
              id="Note"
              value={Note}
              onChange={(e) => setNote(e.target.value)}
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${createimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '600px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(229, 195, 140, 0.9)',
    borderRadius: '8px',
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
    width: '400px',
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

export default CreateTodo;
