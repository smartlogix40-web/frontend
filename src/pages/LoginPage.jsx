import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('business');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    // Placeholder for login logic
    console.log('Login attempt with:', { email, password, userType });
    //  TODO: Add Firebase login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please log in to your account</p>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          {error && <p className="error-message">{error}</p>}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>I am a:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="business"
                  checked={userType === 'business'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Business
              </label>
              <label>
                <input
                  type="radio"
                  value="trucker"
                  checked={userType === 'trucker'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Trucker
              </label>
            </div>
          </div>
          <button type="submit" className="btn-login">Log In</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
