import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteTodo() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteTodo = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5556/List/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/List');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console.');
        console.log(error);
      });
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>
        Back
      </button>
      <h1 style={styles.heading}>Delete Book</h1>
      {loading ? (
        <p style={styles.loadingText}>Loading...</p>
      ) : (
        <div style={styles.deleteContainer}>
          <h3 style={styles.confirmText}>Are you sure you want to delete this book?</h3>
          <button
            style={styles.deleteButton}
            onClick={handleDeleteTodo}
          >
            Yes, Delete it
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '16px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  backButton: {
    backgroundColor: '#0369a1',
    color: '#ffffff',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    marginBottom: '16px',
    fontSize: '16px',
    display: 'inline-block',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '16px',
    color: '#1e3a8a',
  },
  loadingText: {
    fontSize: '18px',
    color: '#0369a1',
  },
  deleteContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid #0369a1',
    borderRadius: '10px',
    width: '600px',
    padding: '24px',
    margin: '0 auto',
  },
  confirmText: {
    fontSize: '24px',
    marginBottom: '24px',
  },
  deleteButton: {
    padding: '16px',
    backgroundColor: '#dc2626',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '18px',
  },
};

export default DeleteTodo;
