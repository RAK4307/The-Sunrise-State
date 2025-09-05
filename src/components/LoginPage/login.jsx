import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showMessage, setShowMessage] = useState(false); // New state for message visibility
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(''); // Clear previous success messages
    setError(''); // Clear previous errors 

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Something went wrong during login.');
      }

      // Handle successful login
      console.log('Login successful:', data);
      // Store the token and user info for authenticated requests
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      setMessage('Login successful!');
      setShowMessage(true); // Show the message
      
      // Start fade out animation after 4.5 seconds
      setTimeout(() => setShowMessage(false), 4500);

      // Redirect to the homepage after 5 seconds
      setTimeout(() => navigate('/'), 5000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      {/* Message Overlay */}
      {message && (
        <p className={`message-overlay ${showMessage ? '' : 'fade-out-up'}`}>
          {message}
        </p>
      )}
      <div className="login-container">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
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
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button type="button" className="social-login-button google-login">
          {/* You can replace this with a Google icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.94 11.06A12.02 12.02 0 0 0 12 3a12 12 0 0 0-8.07 19.94c.05-.01 0-.01 0 0l.05.01a11.95 11.95 0 0 0 16.02-8.94z"/><path d="M12 3v9h9"/></svg>
          Sign in with Google
        </button>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );

  {/* Removed the old message display here */}
};

export default Login;