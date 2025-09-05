import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './signup.css'

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false); // New state for message visibility
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    setMessage(''); // Clear previous success messages
    event.preventDefault(); 
    setError(''); // Clear previous errors

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: fullName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Throw an error with the message from the backend
        throw new Error(data.msg || 'Something went wrong during signup.');
      }

      // Handle successful signup
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError(''); // Clear any previous errors
      setMessage('Account created successfully!');
      setShowMessage(true); // Show the message

      // Hide the message after a few seconds
      setTimeout(() => { setShowMessage(false); }, 4500);
    } catch (err) {
      // Set the error message to be displayed to the user
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      {/* Message Overlay */}
      {message && (
        <p className={`message-overlay ${showMessage ? '' : 'fade-out-up'}`}>
          {message}
        </p>
      )}
      <div className="signup-container">
        <div className="signup-header">
          <h2>Create Your Account</h2>
          <p>Join us and explore the latest news.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button type="button" className="social-signup-button google-signup">
          {/* You can replace this with a Google icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.94 11.06A12.02 12.02 0 0 0 12 3a12 12 0 0 0-8.07 19.94c.05-.01 0-.01 0 0l.05.01a11.95 11.95 0 0 0 16.02-8.94z"/><path d="M12 3v9h9"/></svg>
          Sign up with Google
        </button>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
