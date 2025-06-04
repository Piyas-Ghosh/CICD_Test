import React from 'react';

const ComingSoon = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom right, #1e3c72, #2a5298)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#e0e0e0',
  };

  const glowBoxStyle: React.CSSProperties = {
    marginTop: '30px',
    display: 'inline-block',
    padding: '12px 24px',
    border: '2px solid #00f0ff',
    borderRadius: '999px',
    fontWeight: 600,
    color: '#00f0ff',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 0 15px #00f0ff, 0 0 30px #00f0ff40',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>🚧 Coming Soon</h1>
        <p style={paragraphStyle}>We’re working hard to launch something amazing. Stay tuned!</p>
        <div style={glowBoxStyle}>Notify Me</div>
      </div>
    </div>
  );
};

export default ComingSoon;
