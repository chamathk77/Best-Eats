import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add logic for user signup
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <div style={styles.inputGroup}>
            <div style={styles.inputWrapper}>
              <label htmlFor="firstName" style={styles.label}>First Name</label>
              <input
                type="text"
                id="firstName"
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputWrapper}>
              <label htmlFor="lastName" style={styles.label}>Last Name</label>
              <input
                type="text"
                id="lastName"
                style={styles.input}
                required
              />
            </div>
          </div>
          <div style={styles.inputWrapper}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label htmlFor="phone" style={styles.label}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              style={styles.input}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onClick={() => navigate('/homepage')}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  formContainer: {
    maxWidth: '400px',
    width: '100%',
    padding: '24px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    gap: '16px',
  },
  inputWrapper: {
    flex: 1,
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    marginBottom: '8px',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    width: '100%',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
};

export default SignupPage;
