import React from 'react';
import map from '../public/map.png';

const TransportPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.dashboard}>
        <h2 style={styles.title}>Dashboard</h2>
        <h3 style={styles.subtitle}>Transport</h3>
      </div>

      <div style={styles.mapContainer}>
        {/* Placeholder for Map */}
        <div style={styles.map}>
          {/* Your map component would go here */}
        </div>
      </div>

      <div style={styles.optionsContainer}>
        <div style={styles.optionRow}>
          <input
            type="radio"
            name="transport"
            value="walk"
            style={styles.radio}
          />
          <label style={styles.label}>Walk</label>
          <input
            type="radio"
            name="transport"
            value="car"
            style={styles.radio}
          />
          <label style={styles.label}>Car</label>
        </div>
        <div style={styles.optionRow}>
          <input
            type="radio"
            name="transport"
            value="bus"
            style={styles.radio}
          />
          <label style={styles.label}>Bus</label>
          <input
            type="radio"
            name="transport"
            value="taxi"
            style={styles.radio}
          />
          <label style={styles.label}>Taxi</label>
        </div>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.button}>Submit</button>
        <button style={styles.button}>Edit</button>
        <button style={styles.button}>Delete</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '100px',
    backgroundColor: '#161E38', // Updated background color
  },
  dashboard: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    margin: '0 0 10px',
    color: '#ffffff', // Added text color for better contrast
  },
  subtitle: {
    fontSize: '20px',
    margin: '0 0 20px',
    color: '#ffffff', // Added text color for better contrast
  },
  mapContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '200px',
    backgroundColor: '#ccc',
    Image: `url(${map})`, // Placeholder background color for the map
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  optionRow: {
    margin: '10px',
  },
  radio: {
    marginRight: '10px',
  },
  label: {
    marginRight: '20px',
    color: '#ffffff', // Added text color for better contrast
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#008cba',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TransportPage;
