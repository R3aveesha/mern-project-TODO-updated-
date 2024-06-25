import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowTodo = () => {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5556/List/${id}`)
      .then((response) => {
        setTodo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div style={styles.container}>
      <Link to="/List" style={styles.backButton}>&larr; Back</Link>
      <h1 style={styles.heading}>Todo Details</h1>
      {loading ? (
        <p style={styles.loadingText}>Loading...</p>
      ) : (
        <div style={styles.todoContainer}>
          <div style={styles.detailItem}>
            <span style={styles.label}>Id: </span>
            <span style={styles.value}>{todo._id}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.label}>Title: </span>
            <span style={styles.value}>{todo.Title}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.label}>Special Note: </span>
            <span style={styles.value}>{todo.SpecialNote}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  backButton: {
    display: 'inline-block',
    marginBottom: '1rem',
    color: '#4299e1',
    textDecoration: 'none',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#2d3748',
  },
  loadingText: {
    color: '#718096',
  },
  todoContainer: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #38bdf8',
    borderRadius: '0.5rem',
    padding: '1rem',
  },
  detailItem: {
    marginBottom: '1rem',
  },
  label: {
    fontSize: '1.25rem',
    marginRight: '0.5rem',
    color: '#4a5568',
  },
  value: {
    fontSize: '1rem',
    color: '#2d3748',
  },
};

export default ShowTodo;
