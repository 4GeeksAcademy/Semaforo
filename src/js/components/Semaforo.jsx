import React, { useState } from 'react';

export const Semaforo = () => {
  const [light, setLight] = useState('red');

  const nextLight = () => {
    if (light === 'red') setLight('yellow');
    else if (light === 'yellow') setLight('green');
    else setLight('red');
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '32px' 
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '24px' }}>Semáforo</h1>
      
      <div style={{ 
        backgroundColor: 'black', 
        padding: '16px', 
        borderRadius: '8px' 
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          marginBottom: '8px',
          backgroundColor: light === 'red' ? 'red' : '#ccc'
        }}></div>
        
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          marginBottom: '8px',
          backgroundColor: light === 'yellow' ? 'yellow' : '#ccc'
        }}></div>
        
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: light === 'green' ? 'green' : '#ccc'
        }}></div>
      </div>

      <button 
        onClick={nextLight}
        style={{
          marginTop: '16px',
          padding: '8px 16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
      >
        Cambiar Luz
      </button>
    </div>
  );
};
