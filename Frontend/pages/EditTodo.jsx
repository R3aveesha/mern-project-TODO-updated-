import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import img5 from '../src/components/img5.jpg'

const EditTodo = () => {
  const [title, setTitle] = useState('');
  const [Note, setNote] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5556/List/${id}`)
      .then((response) => {
        setTitle(response.data.Title);
        setNote(response.data.SpecialNote);//
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the todo item', error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { Title: title ,SpecialNote:Note};

    setLoading(true);

    try {
      await axios.put(`http://localhost:5556/List/${id}`, data);
      setLoading(false);
      navigate('/List');
    } catch (error) {
      console.error('There was an error updating the todo!', error);
      setLoading(false);
    }
  };

  return (
    <div style={styles.background}>
    <div style={styles.container}>
      <h1 style={styles.header}>Edit Todo</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
            <label htmlFor="title" style={styles.label}>
              Special Note
            </label>
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
            {loading ? 'Updating...' : 'Update'}
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

const styles = {

  background:{
    backgroundImage:`url(${img5})`,

  },
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
